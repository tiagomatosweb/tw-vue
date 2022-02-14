import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const buildRoute = (path, component) => {
    return {
        path,
        name: path,
        component: () => import(`@/views/${component}`)
    };
};

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        buildRoute("/", "Home"),
        {
            ...buildRoute("/documentation", "Documentation"),
            children: [
                buildRoute("alert", "documentation/Alert"),
                buildRoute("avatar", "documentation/Avatar"),
                buildRoute("button", "documentation/Button"),
                buildRoute("button-close", "documentation/ButtonClose"),
                buildRoute("card", "documentation/Card"),
                buildRoute("form", "documentation/Form"),
                buildRoute("data-table/:id?", "documentation/DataTable"),
                buildRoute("help-text", "documentation/HelpText"),
                buildRoute("modal", "documentation/Modal"),
                buildRoute("ProgressBar", "documentation/ProgressBar"),
                buildRoute("spinner", "documentation/Spinner"),
                buildRoute("tab", "documentation/Tab"),
                buildRoute("tag", "documentation/Tag"),
            ]
        }
    ]
});

export default router;
