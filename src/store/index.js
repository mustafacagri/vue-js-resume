import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      API: 'https://vue-js-resume2.firebaseio.com/',
      languagesList: ["en", "tr"],
      selectedLang: "en",
      content: {
          en: {},
          tr: {}
      }, 
  },
  mutations: {
      setContent: (state, payload) => { state.content = payload},
      setLang: (state, payload) => { state.selectedLang = payload}
  },
  actions: {
      changeLang(context, payload){
          context.commit("setLang", payload)
          router.go(-1)
      }
  },
  modules: {
  },
  getters: {
      getAPI: (state) => state.API,
      getSelectedLang: (state) => state.selectedLang,
      getLanguagesList: (state) => state.languagesList,
  }
})