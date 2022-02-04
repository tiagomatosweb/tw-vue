import FormLabel from './FormLabel';
import { merge } from 'lodash';
import config from './config';

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue.FormLabel = merge(config, options);

        Vue.component('TWFormLabel', FormLabel);
    },
};

export default Plugin;

export {
    FormLabel as TWFormLabel,
};
