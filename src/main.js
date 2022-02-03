import Vue from 'vue';
import App from './App.vue';
import { merge } from 'lodash';
import router from './router';

import '@/assets/css/tailwind.css';
import alertConfig from '@/components/alert/config';
import avatarConfig from '@/components/avatar/config';
import buttonConfig from '@/components/button/config';
import buttonCloseConfig from '@/components/button-close/config';
import formSwitch from '@/components/form-switch/config';
import helpTextConfig from '@/components/help-text/config';
import spinnerConfig from '@/components/spinner/config';
import tagConfig from '@/components/tag/config';

// import buttonCloseConfig from '@/components/button-close/config';
// import inputConfig from '@/components/form-input/config';
// import selectConfig from '@/components/form-select/config';
// import labelConfig from '@/components/form-label/config';
// import dropdownConfig from '@/components/dropdown/config';
// import cardConfig from '@/components/card/config';
// import modalConfig from '@/components/modal/config';
// import toggleConfig from '@/components/toggle/config';

Vue.config.productionTip = false;

const options = {};

Vue.prototype.$TWVue = {
    Alert: merge(alertConfig, options?.Alert?.extend),
    Avatar: merge(avatarConfig, options?.Avatar?.extend),
    Button: merge(buttonConfig, options?.Button?.extend),
    ButtonClose: merge(buttonCloseConfig, options?.ButtonClose?.extend),
    FormSwitch: merge(formSwitch, options?.FormSwitch?.extend),
    Spinner: merge(spinnerConfig, options?.Spinner?.extend),
    Tag: merge(tagConfig, options?.Tag?.extend),
    HelpText: merge(helpTextConfig, options?.HelpText?.extend),

    // TWButtonClose: merge(buttonCloseConfig, options?.TWButtonClose?.extend),
    // TWFormInput: merge(inputConfig, options?.TWFormInput?.extend),
    // TWFormSelect: merge({ ...inputConfig, ...selectConfig }, options?.TWFormSelect?.extend),
    // TWFormLabel: merge(labelConfig, options?.TWFormLabel?.extend),
    // TWDropdown: merge(dropdownConfig, options?.TWDropdown?.extend),
    // TWCard: merge(cardConfig, options?.TWCard?.extend),
    // TWModal: merge(modalConfig, options?.TWModal?.extend),
    // TWToggle: merge(toggleConfig, options?.TWToggle?.extend),
};

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
