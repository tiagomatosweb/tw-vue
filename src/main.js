import Vue from 'vue';
import App from './App.vue';
import { merge } from 'lodash';

import '@/assets/css/tailwind.css';
import buttonConfig from '@/utils/button';
import inputConfig from '@/utils/inputs';
import alertConfig from '@/utils/alert';
import labelConfig from '@/utils/label';
import helpTextConfig from '@/utils/helpText';
import avatarConfig from '@/utils/avatar';
import dropdownConfig from '@/utils/dropdown';
import cardConfig from '@/utils/card';

Vue.config.productionTip = false;

const options = {};

Vue.prototype.$TWVue = {
    TWButton: merge(buttonConfig, options?.TWButton?.extend),
    TWFormInput: merge(inputConfig, options?.TWFormInput?.extend),
    TWFormSelect: merge(inputConfig, options?.TWFormSelect?.extend),
    TWAlert: merge(alertConfig, options?.TWAlert?.extend),
    TWFormLabel: merge(labelConfig, options?.TWFormLabel?.extend),
    TWHelpText: merge(helpTextConfig, options?.TWHelpText?.extend),
    TWAvatar: merge(avatarConfig, options?.TWAvatar?.extend),
    TWDropdown: merge(dropdownConfig, options?.TWDropdown?.extend),
    TWCard: merge(cardConfig, options?.TWCard?.extend),
};

new Vue({
  render: h => h(App),
}).$mount("#app");
