import Vue from 'vue';
import App from './App.vue';
import { merge } from 'lodash';

import '@/assets/css/tailwind.css';
import buttonConfig from '@/utils/buttons';
import inputConfig from '@/utils/inputs';
import alertConfig from '@/utils/alerts';

Vue.config.productionTip = false;

const options = {};

Vue.prototype.$TWVue = {
    TWButton: merge(buttonConfig, options?.TWButton?.extend),
    TWFormInput: merge(inputConfig, options?.TWFormInput?.extend),
    TWAlert: merge(alertConfig, options?.TWAlert?.extend),
};

new Vue({
  render: h => h(App),
}).$mount("#app");
