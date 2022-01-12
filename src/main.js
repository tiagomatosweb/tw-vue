import Vue from 'vue';
import App from './App.vue';
import { merge } from 'lodash';

import '@/assets/css/tailwind.css';
import buttonConfig from '@/components/button/config';
import buttonCloseConfig from '@/components/button-close/config';
import inputConfig from '@/components/form-input/config';
import selectConfig from '@/components/form-select/config';
import alertConfig from '@/components/alert/config';
import labelConfig from '@/components/form-label/config';
import helpTextConfig from '@/components/help-text/config';
import avatarConfig from '@/components/avatar/config';
import spinnerConfig from '@/components/spinner/config';
import dropdownConfig from '@/components/dropdown/config';
import cardConfig from '@/components/card/config';
import badgeConfig from '@/components/badge/config';
import router from './router';
import modalConfig from '@/components/modal/config';
import toggleConfig from '@/components/toggle/config';

Vue.config.productionTip = false;

const options = {};

Vue.prototype.$TWVue = {
    TWButton: merge(buttonConfig, options?.TWButton?.extend),
    TWButtonClose: merge(buttonCloseConfig, options?.TWButtonClose?.extend),
    TWFormInput: merge(inputConfig, options?.TWFormInput?.extend),
    TWFormSelect: merge({ ...inputConfig, ...selectConfig }, options?.TWFormSelect?.extend),
    TWAlert: merge(alertConfig, options?.TWAlert?.extend),
    TWFormLabel: merge(labelConfig, options?.TWFormLabel?.extend),
    TWHelpText: merge(helpTextConfig, options?.TWHelpText?.extend),
    TWAvatar: merge(avatarConfig, options?.TWAvatar?.extend),
    TWSpinner: merge(spinnerConfig, options?.TWSpinner?.extend),
    TWDropdown: merge(dropdownConfig, options?.TWDropdown?.extend),
    TWCard: merge(cardConfig, options?.TWCard?.extend),
    TWBadge: merge(badgeConfig, options?.TWBadge?.extend),
    TWModal: merge(modalConfig, options?.TWModal?.extend),
    TWToggle: merge(toggleConfig, options?.TWToggle?.extend),
};

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
