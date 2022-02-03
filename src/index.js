// import { merge } from 'lodash';
import * as components from './components';
// import Alert from './components/alert/Alert';
// import alertConfig from './components/alert/config';
// import avatarConfig from './components/avatar/config';
// import buttonConfig from './components/button/config';
// import buttonCloseConfig from './components/button-close/config';
// import formSwitch from './components/form-switch/config';
// import helpTextConfig from './components/help-text/config';
// import spinnerConfig from './components/spinner/config';
// import tagConfig from './components/tag/config';

export default {
    install(Vue) {
        if (this.installed) {
            return;
        }

        this.installed = true;

        Vue.prototype.$TWVue = {
            // Alert: merge(alertConfig, options?.Alert?.extend),
            // Avatar: merge(avatarConfig, options?.Avatar?.extend),
            // Button: merge(buttonConfig, options?.Button?.extend),
            // ButtonClose: merge(buttonCloseConfig, options?.ButtonClose?.extend),
            // FormSwitch: merge(formSwitch, options?.FormSwitch?.extend),
            // Spinner: merge(spinnerConfig, options?.Spinner?.extend),
            // Tag: merge(tagConfig, options?.Tag?.extend),
            // HelpText: merge(helpTextConfig, options?.HelpText?.extend),
        };
        // Vue.component(Alert.name, Alert);

        for (let componentKey in components) {
            Vue.use(components[componentKey]);
        }
    },
};

