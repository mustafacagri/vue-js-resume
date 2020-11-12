import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueTypedJs from 'vue-typed-js'
import VuePageTransition from 'vue-page-transition'
import Vuelidate from "vuelidate"

Vue.use(VueTypedJs)
Vue.use(VuePageTransition)
Vue.use(Vuelidate)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
