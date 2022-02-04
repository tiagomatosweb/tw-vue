import FormSelect from './FormSelect';
import { merge } from 'lodash';
import config from './config';

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue.FormSelect = merge(config, options);

        Vue.component('TWFormSelect', FormSelect);
    },
};

export default Plugin;

export {
    FormSelect as TWFormSelect,
};
