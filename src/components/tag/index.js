import Tag from './Tag';
import { merge } from 'lodash';
import config from './config';

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue.Tag = merge(config, options);

        Vue.component('TWTag', Tag);
    },
};

export default Plugin;

export {
    Tag as TWTag,
};
