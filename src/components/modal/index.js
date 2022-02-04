import Modal from './Modal';
import { merge } from 'lodash';
import config from './config';

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue.Modal = merge(config, options);

        Vue.component('TWModal', Modal);
    },
};

export default Plugin;

export {
    Modal as TWModal,
};
