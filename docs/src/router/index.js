import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const buildRoute = (path, component) => {
    return {
        path,
        name: path,
        component: () => import(`@/views/${component}`),
    };
};

// const routes = [
//     {
//         path: '/',
//         name: 'Home',
//         component: Home,
//     },
//     {
//         path: '/alerts',
//         name: 'alerts',
//         component: () => import(/* webpackChunkName: "alerts" */ '@docs/views/Alerts.vue'),
//     },
//     {
//         path: '/avatars',
//         name: 'avatars',
//         component: () => import(/* webpackChunkName: "avatars" */ '../views/Avatars.vue'),
//     },
//     {
//         path: '/buttons',
//         name: 'buttons',
//         component: () => import(/* webpackChunkName: "buttons" */ '../views/Buttons.vue'),
//     },
//     {
//         path: '/buttons-close',
//         name: 'buttons-close',
//         component: () => import(/* webpackChunkName: "buttons" */ '../views/ButtonsClose.vue'),
//     },
//     {
//         path: '/form-switch',
//         name: 'form-switch',
//         component: () => import(/* webpackChunkName: "form-switch" */ '../views/FormSwitch.vue'),
//     },
//     {
//         path: '/help-text',
//         name: 'help-text',
//         component: () => import(/* webpackChunkName: "tags" */ '../views/HelpTexts.vue'),
//     },
//     {
//         path: '/tags',
//         name: 'tags',
//         component: () => import(/* webpackChunkName: "tags" */ '../views/Tags.vue'),
//     },
//     // {
//     //     path: '/pagination',
//     //     name: 'pagination',
//     //     // route level code-splitting
//     //     // this generates a separate chunk (about.[hash].js) for this route
//     //     // which is lazy-loaded when the route is visited.
//     //     component: () => import(/* webpackChunkName: "about" */ '../views/Pagination.vue'),
//     // },
//     // {
//     //     path: '/form',
//     //     name: 'form',
//     //     // route level code-splitting
//     //     // this generates a separate chunk (about.[hash].js) for this route
//     //     // which is lazy-loaded when the route is visited.
//     //     component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue'),
//     // },
//     // {
//     //     path: '/slide-overs',
//     //     name: 'slideOvers',
//     //     component: () => import(/* webpackChunkName: "about" */ '../views/SlideOvers.vue'),
//     // },
// ];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        buildRoute('/', 'Home'),
        {
           ...buildRoute('/documentation', 'Documentation'),
            children: [
                buildRoute('alert', 'documentation/Alert'),
                buildRoute('avatar', 'documentation/Avatar'),
                buildRoute('button', 'documentation/Button'),
                buildRoute('button-close', 'documentation/ButtonClose'),
                buildRoute('form-switch', 'documentation/FormSwitch'),
                buildRoute('help-text', 'documentation/HelpText'),
                buildRoute('tag', 'documentation/Tag'),
            ]
        }
    ],
});

export default router;
