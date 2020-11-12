<template>
  <div id="Contact" v-if="content">
    <div class="mainbox">
        <div class="title">{{content.title}}</div>
        <div class="row mt-4" id="ContactForm">
            <div class="col-md-4">
                <div class="subtitle mb-5 mt-1">{{content.subtitle}}</div>
                <p class="text" v-html="content.text"></p>
            </div>
            <div class="col-md-8">
                <div class="alert alert-danger" v-if="error">{{error}}</div>
                <div class="alert alert-success" v-if="success">{{content.success}}</div>
                <div class="alert alert-warning" v-if="loading"><img src="/img/loading.gif" class="mr-2" width="30" alt="loading" /> {{content.loading}}</div>
                <div class="row" v-if="content.formTexts">
                    <div class="col-md-6 mb-3"><input type="text" class="form-control" :placeholder="content.formTexts.name" v-model.trim="name" id="name" /></div>
                    <div class="col-md-6 mb-3"><input type="text" class="form-control" :placeholder="content.formTexts.email" v-model.trim="email" id="email" /></div>
                    <div class="col-md-12 mb-3"><input type="text" class="form-control" :placeholder="content.formTexts.subject" v-model.trim="subject" id="subject" /></div>
                    <div class="col-md-12 mb-3"><textarea class="form-control" rows="3" :placeholder="content.formTexts.message" v-model.trim="message" id="message"></textarea></div>
                    <div class="col-md-12"><button class="btn btn-success" @click="send" :disabled="loading"><i class="fas fa-paper-plane mr-3"></i> {{content.formTexts.send}}</button></div>
                </div>
            </div>
        </div>
    </div><!-- mainbox -->
  </div>
</template>

<script>
import axios from 'axios'
import { required, minLength, email } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
export default {
    name: "Contact",
    data(){
        return{
            content: {},

            name: null,
            email: null,
            subject: null,
            message: null,

            error: null,
            loading: false,
            success: false,
            reSendTime: 1
        }
    },
    validations: { 
        name: {
            required,
            minLength: minLength(4)
        },
        email: {
            required,
            email
        },
        subject: {
            required,
            minLength: minLength(4)
        },
        message: {
            required,
            minLength: minLength(10)
        }
    },
    methods:{
        setError(payLoad){
            this.error = payLoad.error
            setTimeout(() => {
                this.error = null
            }, 10000);
        },

        createError(value){
            this.setError({error:this.content.pleaseControl.replace('[value]', value)})
            document.getElementById(value).focus()
        },

        send() {
            this.success = false
            this.error = false
            if(this.$v.$invalid){
                if(this.$v.name.$invalid){ this.createError('name')}
                else if(this.$v.email.$invalid){ this.createError('email') }
                else if(this.$v.subject.$invalid){ this.createError('subject') }
                else if(this.$v.message.$invalid){ this.createError('message') }
            }
            else{
                let doItPost = false
                let contactFormTime = localStorage.getItem("contactFormTime")
                if(!contactFormTime || contactFormTime == undefined){doItPost=true}
                else{
                    if(+ contactFormTime + this.reSendTime*60*1000 < new Date().getTime()){doItPost=true}
                    else{this.setError({error:this.content.waitMinutes.replace('[reSendTime]',this.reSendTime)})}
                }

                if(doItPost){
                    this.loading = true
                    let config = {contentType: 'application/json'}
                    let data = {
                        service_id: 'emailjs',
                        template_id: 'template_mh3036w',
                        user_id: 'user_LRjGvkJOn9lPo5bnzOZQL',
                        template_params: {name: this.name, email: this.email, subject: this.subject, message: this.message}
                    }

                    axios.post('https://api.emailjs.com/api/v1.0/email/send', data, config)
                        .then( response => {
                            console.log(response)
                            this.loading = false
                            this.success = true
                            this.name = null, this.email = null, this.subject = null, this.message = null
                            localStorage.setItem("contactFormTime", new Date().getTime())
                        })
                        .catch( error => {
                            this.setError({error})
                            this.loading = false
                        })
                }
            }


        }
    },
    computed:{
        ...mapGetters(['getAPI','getSelectedLang'])
    },
    created() {
        axios.get(this.getAPI + 'contact.json')
            .then(res => {
                this.content = res.data[this.getSelectedLang]
            })
            .catch(err => console.log(err))
    }
}
</script>