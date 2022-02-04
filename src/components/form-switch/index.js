import FormSwitch from './FormSwitch';
import { merge } from 'lodash';
import config from './config';

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue.FormSwitch = merge(config, options);

        Vue.component('TWFormSwitch', FormSwitch);
    },
};

export default Plugin;

export {
    FormSwitch as TWFormSwitch,
};
