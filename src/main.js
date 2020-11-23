import Vue from 'vue';
import App from './App.vue';
import { merge } from 'lodash';

import '@/assets/css/tailwind.css';
import buttonConfig from '@/utils/buttons';
import inputConfig from '@/utils/inputs';
import alertConfig from '@/utils/alerts';
import labelConfig from '@/utils/label';
import helpTextConfig from '@/utils/helpText';

Vue.config.productionTip = false;

const options = {};

Vue.prototype.$TWVue = {
    TWButton: merge(buttonConfig, options?.TWButton?.extend),
    TWFormInput: merge(inputConfig, options?.TWFormInput?.extend),
    TWAlert: merge(alertConfig, options?.TWAlert?.extend),
    TWLabel: merge(labelConfig, options?.TWLabel?.extend),
    TWHelpText: merge(helpTextConfig, options?.TWHelpText?.extend),
};

new Vue({
  render: h => h(App),
}).$mount("#app");
