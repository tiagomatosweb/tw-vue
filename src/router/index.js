import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pagination',
    name: 'pagination',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pagination.vue'),
  },
    {
        path: '/form',
        name: 'form',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue'),
    },
    {
        path: '/alert',
        name: 'alert',
        component: () => import(/* webpackChunkName: "about" */ '../views/Alert.vue'),
    },
    {
        path: '/avatar',
        name: 'avatar',
        component: () => import(/* webpackChunkName: "about" */ '../views/Avatar.vue'),
    },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
