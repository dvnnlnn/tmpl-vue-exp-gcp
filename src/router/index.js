import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('../views/Home.vue');
const User = () => import('../views/User.vue');

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/user',
      name: 'user',
      component: User,
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
