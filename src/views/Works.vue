<template>
  <div id="Works" v-if="content">
    <div class="mainbox">
        <div class="title">{{content.title}}</div>
        <div class="row mt-5">
            <div class="col-md-5">
                <img src="/img/works-loading.gif" alt="works loading, or not?" />
            </div>
            <div class="col-md-7 text">
                <vue-typed-js :strings="content.titles" :loop="true" :typeSpeed="80" v-if="content.titles">
                    <div><span class="typing"></span></div>
                </vue-typed-js>
            </div>
        </div>
    </div><!-- mainbox -->
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    name: "Works",
    data(){
        return{
            content: {}
        }
    },
    computed:{
        ...mapGetters(['getAPI','getSelectedLang'])
    },
    created() {
        axios.get(this.getAPI + 'works.json')
            .then(res => {
                console.log(res)
                this.content = res.data[this.getSelectedLang]
            })
            .catch(err => console.log(err))
    }
}
</script>