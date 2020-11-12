<template>
<div class="container-fluid">
    <div id="Header">
        <p class="text-center"><img src="/img/avatar.png" alt="Mustafa Çağrı Güven" /></p>
        <h2>M. Çağrı Güven</h2>
        <p>Senior Fullstack Web Developer</p>
        <div class="mobileMenu"><a @click="showHideMobile"><i class="fas fa-bars fa-3x"></i></a></div>
        <div class="mMenu h" id="headerShowMenu">
            <div class="menu" v-if="content[getSelectedLang]">
                <router-link :to="link.url" class="{'selected' : link.url=='home'}" exact v-for="link in content[getSelectedLang].links" :key="link.id" @click="showHideMobile"><i :class="'fas fa-' + link.icon"></i>{{link.name}}</router-link>
                <router-link to="/ChangeLang/TR" class="pt-3" v-if="getSelectedLang!='tr'"><i class="fas fa-flag"></i>Türkçe</router-link>
                <router-link to="/ChangeLang/EN" class="pt-3" v-if="getSelectedLang!='en'"><i class="fas fa-flag"></i>English</router-link>
            </div>
            <div class="social" v-if="content.social">
                <a v-for="social in content.social" :key="social.id" :href="social.link" target="_blank"><i :class="'fab fa-' + social.icon"></i></a>
            </div>
            <div class="copyright">© 2020 Mustafa Çağrı Güven</div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
    name: 'Header',
    data(){
        return{
            content: {},
        }
    },
    methods:{
        showHideMobile(){
            let cName = document.getElementById("headerShowMenu").className
            cName = cName == "mMenu s" ? "mMenu h" : "mMenu s"
            document.getElementById("headerShowMenu").className = cName
        }
    },
    watch: {
    },
    computed:{
        ...mapGetters(['getAPI','getSelectedLang'])
    },
    created() {
        axios.get(this.getAPI + 'header.json')
            .then(res => {
                this.content = res.data
            })
            .catch(err => console.log(err))
    }
}
</script>

<style>
</style>