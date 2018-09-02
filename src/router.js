import Vue from 'vue';
import Router from 'vue-router';
import Home from './app/Home/Home.vue';
import Contact from './app/Contact/Contact.vue';

const About = () => import(/* webpackChunkName: "about" */ './views/About.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
