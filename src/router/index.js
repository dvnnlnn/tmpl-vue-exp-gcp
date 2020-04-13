import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('../views/Home.vue');
const About = () => import('../views/About.vue');

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
