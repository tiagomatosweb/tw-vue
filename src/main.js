import Vue from "vue";
import App from "./App.vue";

import '@/assets/css/tailwind.css';
import { BASE_CSS, SIZES_CLASS, VARIANTS_CLASS } from '@/utils/buttons';

Vue.config.productionTip = false;

const options = {
    TWButton: {
        extend: {
            variants: {
                'brand-primary': 'text-white bg-red-200 hover:bg-red-200 shadow-sm',
                'brand-secondary': 'text-white bg-blue-100 hover:bg-blue-100 shadow-sm',
            },
            sizes: {
                xxl: 'px-6 py-3 text-2xl rounded-md',
            },
        },
    },
};

Vue.prototype.$TWVue = {
    TWButton: {
        base: BASE_CSS,
        variants: { ...VARIANTS_CLASS, ...options?.TWButton?.extend?.variants },
        sizes: { ...SIZES_CLASS, ...options?.TWButton?.extend?.sizes },
    },
};

new Vue({
  render: h => h(App),
}).$mount("#app");
