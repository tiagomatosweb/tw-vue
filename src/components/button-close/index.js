import ButtonClose from './ButtonClose';
import { merge } from 'lodash';
import config from './config';

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue.ButtonClose = merge(config, options);

        Vue.component('TWButtonClose', ButtonClose);
    },
};

export default Plugin;

export {
    ButtonClose as TWButtonClose,
};
