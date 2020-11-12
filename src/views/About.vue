<template>
  <div id="About" v-if="content">
    <div class="mainbox">
        <div class="title mt-5">{{content.title}}</div>
        <div class="row mt-5">
            <div class="col-md-2"><img class="avatar" src="/img/avatar.png" alt="Mustafa Çağrı Güven" /></div>
            <div class="col-md-6 me-text pr-5">
                <!-- <p>Hi, I'm Mustafa Çağrı. I graduated from Sabanci University '11 (Turkey) with computer science engineering. I have been coding since before college. Actually, since from Classic ASP age!</p>
                <p>I like to discover new technologies and quickly adapt to them. Now, I usually engage in front-end technologies. While Vue.js is my favorite, pure javascript and jQuery can save lives most of the time.</p>
                <p>I usually have choosing ASP.Net Core or Node.js for backend. However, future is in Node.js or Pyhthon, as I know it!</p> -->
                <p v-for="text in content.texts" :key="text.id">{{text}}</p>
            </div>
            <div class="col-md-4">
                <div class="pl-4">
                    <ProgressBar title="Frontend Developing" :percentage="100" bg="amethyst" :striped="true" :animation="true"></ProgressBar>
                    <ProgressBar title="Backend Developing" :percentage="92" bg="info" :delay="200" :striped="true" :animation="true"></ProgressBar>
                    <ProgressBar title="Javascript" :percentage="100" bg="primary" :delay="400" :striped="true" :animation="true"></ProgressBar>
                    <ProgressBar title="Vue.js" :percentage="88" bg="success" :delay="600" :striped="true" :animation="true"></ProgressBar>
                    <ProgressBar title="UI / UX Design" :percentage="85" bg="danger" :delay="800" :striped="true" :animation="true"></ProgressBar>
                    <ProgressBar title="ASP.Net Core" :percentage="77" bg="warning" :delay="1000" :striped="true" :animation="true"></ProgressBar>
                </div>
            </div>
        </div>
    </div><!-- mainbox -->
    <div class="infobox">
        <div class="row">
            <div class="col-md-3"><i class="fas fa-thumbs-up"></i><label><Counter end="217" /></label><span>{{content.infobox[0]}}</span></div>
            <div class="col-md-3"><i class="fas fa-coffee"></i><label><Counter :end="3624" /></label><span>{{content.infobox[1]}}</span></div>
            <div class="col-md-3"><i class="fas fa-users"></i><label><Counter end="59" /></label><span>{{content.infobox[2]}}</span></div>
            <div class="col-md-3"><i class="fas fa-stopwatch"></i><label><Counter end="10" /></label><span>{{content.infobox[3]}}</span></div>
        </div>
    </div><!-- infobox -->
    <div class="mainbox mt-5" style="min-height:auto!important;">
        <div class="title text-danger">I <span class="text-danger"><i class="fas fa-heart"></i></span> Coding</div>
        <div class="row mt-4">
            <div class="col-md-3">
                <ProgressBar title="Classic ASP" :percentage="100" bg="turquoise" :striped="true" :animation="true"></ProgressBar>
                <ProgressBar title="HTML 5" :percentage="100" customBgColor="#f06529" :striped="true" :animation="true"></ProgressBar>
                <ProgressBar title="jQuery" :percentage="91" customBgColor="#0769ad" :striped="true" :animation="true"></ProgressBar>
                <ProgressBar title="CSS 3" :percentage="92" customBgColor="#66d3fa" :striped="true" :animation="true"></ProgressBar>
                <ProgressBar title="Bootstrap" :percentage="97" customBgColor="#563d7c" :striped="true" :animation="true"></ProgressBar>
                <ProgressBar title="SignalR" :percentage="66" customBgColor="#7014e8" :striped="true" :animation="true"></ProgressBar>
            </div>
            <div class="col-md-3">
                <ProgressBar title="SEO" :percentage="100" bg="shymoment" :striped="true" :animation="true"></ProgressBar>
                <ProgressBar title="Wordpress" :percentage="76" customBgColor="#d54e21" :striped="true" :animation="true"></ProgressBar>
                <ProgressBar title="Adobe Photoshop" :percentage="81" customBgColor="#8bc3fc" :striped="true" :animation="true"></ProgressBar>
                <ProgressBar title="Social Media Marketing" :percentage="79" bg="danger" :striped="true" :animation="true"></ProgressBar>
                <ProgressBar title="Search Engine Marketing" :percentage="76" bg="warning" :striped="true" :animation="true"></ProgressBar>
            </div>
            <div class="col-md-3">
                <ProgressBar title="MySQL" :percentage="94" customBgColor="#00758F" :striped="true" :animation="true"></ProgressBar>
                <ProgressBar title="MSSQL" :percentage="87" bg="pink" :striped="true" :animation="true"></ProgressBar>
                <ProgressBar title="MongoDB" :percentage="56" customBgColor="#3FA037" :striped="true" :animation="true"></ProgressBar>
                <ProgressBar title="Firebase" :percentage="74" customBgColor="#FFA611" :striped="true" :animation="true"></ProgressBar>
                <ProgressBar title="PHP" :percentage="63" customBgColor="#B0B3D6" :striped="true" :animation="true"></ProgressBar>
            </div>


            <div class="col-md-3">
                <ProgressBar title="Node.js" :percentage="72" customBgColor="#68A063" :striped="true" :animation="true"></ProgressBar>
                <ProgressBar title="Express.js" :percentage="72" customBgColor="#303030" :striped="true" :animation="true"></ProgressBar>
                <ProgressBar title="Arduino" :percentage="71" bg="info" :striped="true" :animation="true"></ProgressBar>
                <ProgressBar title="Unity - Game Developing" :percentage="73" bg="brightyarrow" :striped="true" :animation="true"></ProgressBar>
                <ProgressBar title="TFS / Git" :percentage="77" bg="americanriver" :striped="true" :animation="true"></ProgressBar>
            </div>
        </div>
    </div><!-- mainbox -->
  </div>
</template>

<style scoped>

</style>

<script>
import Counter from 'vue-js-counter'
import ProgressBar from 'vue-js-progress'
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    name: "About",
    data(){
        return{
            content: {}
        }
    },
    components: {
        Counter,
        ProgressBar
    },
    computed:{
        ...mapGetters(['getAPI','getSelectedLang'])
    },
    created() {
        axios.get(this.getAPI + 'about.json')
            .then(res => {
                this.content = res.data[this.getSelectedLang]
            })
            .catch(err => console.log(err))
    }
}
</script>