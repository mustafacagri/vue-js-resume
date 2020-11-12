<template>
    <div id="home">
        <div class="home" v-if="content">
            <h1>{{content.name}}</h1>
            <p v-html="content.subtitle"></p>
            <vue-typed-js :strings="content.titles" :loop="true" :typeSpeed="80" v-if="content.titles">
                <div>{{content.iAmA}} <span class="typing"></span></div>
            </vue-typed-js>
            <router-link to="/contact" class="mt-4 btn btn-1"><svg><rect x="0" y="0" fill="none" width="100%" height="100%"/></svg>{{content.hireMe}}</router-link>
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  data(){
      return{
          content: {}
      }
  },
  computed:{
      ...mapGetters(['getAPI','getSelectedLang'])
  },
  methods:{
    
  },
  created() {
      axios.get(this.getAPI + 'home.json')
        .then(res => {
            this.content = res.data[this.getSelectedLang]
        })
        .catch(err => console.log(err))
  }
}
</script>