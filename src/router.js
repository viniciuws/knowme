import Vue from 'vue';
import Router from 'vue-router';
import Home from './app/Home/Home.vue';
import Contact from './app/Contact/Contact.vue';
import Portfolio from './app/Portfolio/Portfolio.vue';

const About = () => import(/* webpackChunkName: "about" */ './app/About/About.vue');

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
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
    },
  ],
});
