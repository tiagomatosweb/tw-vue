import Vue from "vue";
import App from "./App.vue";

import '@/assets/css/tailwind.css';
import buttonConfig from '@/utils/buttons';
import inputConfig from '@/utils/inputs';

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
        base: buttonConfig.base,
        variants: { ...buttonConfig.variants, ...options?.TWButton?.extend?.variants },
        sizes: { ...buttonConfig.sizes, ...options?.TWButton?.extend?.sizes },
    },
    TWFormInput: {
        base: inputConfig.base,
        variants: { ...inputConfig.variants, ...options?.TWFormInput?.extend?.variants },
        sizes: { ...inputConfig.sizes, ...options?.TWFormInput?.extend?.sizes },
    },
};

new Vue({
  render: h => h(App),
}).$mount("#app");
