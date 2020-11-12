<template>
  <div id="Experiences" v-if="content">
    <div class="mainbox">
        <div class="title">
            {{content.title}}
            <div class="tab">
                <button class="btn btn-3 mr-2" :class="isWork==1?'selected':''" @click="isWork=1"><i class="fas fa-code mr-2"></i> {{content.tabs.work}}</button>
                <button class="btn btn-3" :class="isWork==0?'selected':''" @click="isWork=0"><i class="fas fa-graduation-cap mr-2"></i> {{content.tabs.education}}</button>
            </div>
        </div>
        <transition-group name="list" tag="p" class="timeline">
            <div class="item" v-for="item in data" :key="item.id">
                <i class="fas fa-graduation-cap" :class="{'fa-code' : isWork}"></i>
                <span>{{item.time}}</span>
                <h2>{{item.title}}</h2>
                {{item.content}}
            </div>
        </transition-group>
    </div><!-- mainbox -->
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    name:"Experiences",
    data(){
        return{
            isWork: 1,
            data: null,
            content: null
        }
    },
    watch: {
        isWork: function (newVal, oldVal) {
            if(newVal==1){this.data = this.content.work}
            else{this.data = this.content.education}
        },
        content: function(newVal, oldVal) {
            if(oldVal == null){
                setTimeout(() => {
                    this.data = this.content.work
                }, 100);
            }
        }
    },
    created(){

        axios.get(this.getAPI + 'experiences.json')
            .then(res => {
                console.log(res)
                this.content = res.data[this.getSelectedLang]
            })
            .catch(err => console.log(err))
    },
    computed:{
        ...mapGetters(['getAPI','getSelectedLang'])
    }
}
</script>