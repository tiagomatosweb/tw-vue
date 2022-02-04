import FormInput from './FormInput';
import { merge } from 'lodash';
import config from './config';

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue.FormInput = merge(config, options);

        Vue.component('TWFormInput', FormInput);
    },
};

export default Plugin;

export {
    FormInput as TWFormInput,
};
