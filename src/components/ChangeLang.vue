<template>
    <div>
        
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'ChangeLang',
    data(){
        return {
            lang: this.$route.params.lang.toLowerCase()
        }
    },
    created(){
        if(this.getLanguagesList.filter(a => a == this.lang).length!=1){
            this.lang = this.getLanguagesList[0]
        }
        this.changeLang(this.lang)
    },
    computed:{
        ...mapGetters(['getLanguagesList'])
    },
    methods:{
        ...mapActions(['changeLang'])
    }
}
</script>