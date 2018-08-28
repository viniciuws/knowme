import Vue from 'vue';
import Router from 'vue-router';
import Layout from './app/Layout/Layout.vue';

const About = () => import( /* webpackChunkName: "about" */ './views/About.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About,
    },
  ],
});
