import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/about', name: 'About', component: () => import('../views/About.vue')},
  {path: '/experiences', name: 'Experiences', component: () => import('../views/Experiences.vue')},
  {path: '/services', name: 'Services', component: () => import('../views/Services.vue')},
  {path: '/works', name: 'Works', component: () => import('../views/Works.vue')},
  {path: '/contact', name: 'Contact', component: () => import('../views/Contact.vue')},
  {path: '/changeLang/:lang', name: 'ChangeLang', component: () => import('@/components/ChangeLang.vue')},
];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
