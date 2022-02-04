import Button from './Button';
import { merge } from 'lodash';
import config from './config';

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue.Button = merge(config, options);

        Vue.component('TWButton', Button);
    },
};

export default Plugin;

export {
    Button as TWButton,
};
