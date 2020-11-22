import Vue from 'vue';
import App from './App.vue';
import { merge } from 'lodash';

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
    TWButton: merge(buttonConfig, options?.TWButton?.extend),
    TWFormInput: merge(inputConfig, options?.TWFormInput?.extend),
};

new Vue({
  render: h => h(App),
}).$mount("#app");
