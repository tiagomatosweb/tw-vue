import FormTextarea from './FormTextarea';
import { merge } from 'lodash';
import config from '../form-input/config';

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue.FormTextarea = merge(config, options);

        Vue.component('TWFormTextarea', FormTextarea);
    },
};

export default Plugin;

export {
    FormTextarea as TWFormTextarea,
};
