import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const buildRoute = (path, component) => {
    return {
        path,
        name: path,
        component: () => import(`@/views/${component}`),
    };
};


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
                buildRoute('form', 'documentation/Form'),
                buildRoute('help-text', 'documentation/HelpText'),
                buildRoute('tag', 'documentation/Tag'),
            ]
        }
    ],
});

export default router;
