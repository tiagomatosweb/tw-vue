import Avatar from './Avatar';
import { merge } from 'lodash';
import config from './config';

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue.Avatar = merge(config, options);

        Vue.component('TWAvatar', Avatar);
    },
};

export default Plugin;

export {
    Avatar as TWAvatar,
};
