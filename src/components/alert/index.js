import Alert from './Alert';
import { merge } from 'lodash';
import config from './config';

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue.Alert = merge(config, options);

        Vue.component('TWAlert', Alert);
    },
};

export default Plugin;

export {
    Alert as TWAlert,
};
