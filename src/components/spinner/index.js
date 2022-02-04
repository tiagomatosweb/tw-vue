import Spinner from './Spinner';
import { merge } from 'lodash';
import config from './config';

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue.Spinner = merge(config, options);

        Vue.component('TWSpinner', Spinner);
    },
};

export default Plugin;

export {
    Spinner as TWSpinner,
};
