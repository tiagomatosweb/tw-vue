import Vue from 'vue';
import App from './App.vue';
import { merge } from 'lodash';

import '@/assets/css/tailwind.css';
import buttonConfig from '@/utils/button';
import buttonCloseConfig from '@/utils/buttonClose';
import inputConfig from '@/utils/inputs';
import alertConfig from '@/utils/alert';
import labelConfig from '@/utils/label';
import helpTextConfig from '@/utils/helpText';
import avatarConfig from '@/utils/avatar';
import dropdownConfig from '@/utils/dropdown';
import cardConfig from '@/utils/card';
import badgeConfig from '@/utils/badge';
import router from './router';
import modalConfig from '@/utils/modal';

Vue.config.productionTip = false;

const options = {};

Vue.prototype.$TWVue = {
    TWButton: merge(buttonConfig, options?.TWButton?.extend),
    TWButtonClose: merge(buttonCloseConfig, options?.TWButtonClose?.extend),
    TWFormInput: merge(inputConfig, options?.TWFormInput?.extend),
    TWFormSelect: merge(inputConfig, options?.TWFormSelect?.extend),
    TWAlert: merge(alertConfig, options?.TWAlert?.extend),
    TWFormLabel: merge(labelConfig, options?.TWFormLabel?.extend),
    TWHelpText: merge(helpTextConfig, options?.TWHelpText?.extend),
    TWAvatar: merge(avatarConfig, options?.TWAvatar?.extend),
    TWDropdown: merge(dropdownConfig, options?.TWDropdown?.extend),
    TWCard: merge(cardConfig, options?.TWCard?.extend),
    TWBadge: merge(badgeConfig, options?.TWBadge?.extend),
    TWModal: merge(modalConfig, options?.TWModal?.extend),
};

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
