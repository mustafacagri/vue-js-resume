<template>
  <div id="Services" v-if="content">
    <div class="mainbox">
        <div class="title">{{content.title}}</div>
        <div class="row boxes">
            <div class="col-md-4" v-for="item in content.boxes" :key="item.id">
                <div class="box">
                    <i :class="'fas fa-'+ item.icon"></i>
                    <h2>{{item.title}}</h2>
                    {{item.content}}
                </div>
            </div>
        </div>
    </div><!-- mainbox -->
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    name:"Services",
    data(){
        return{
            content: {}
        }
    },
    computed:{
        ...mapGetters(['getAPI','getSelectedLang'])
    },
    created() {
        axios.get(this.getAPI + 'services.json')
            .then(res => {
                console.log(res)
                this.content = res.data[this.getSelectedLang]
            })
            .catch(err => console.log(err))
    }
}
</script>