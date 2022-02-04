import Tabs from './Tabs';
import TabItem from './TabItem';
import { merge } from 'lodash';
import config from './config';

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue.Tab = merge(config, options);

        Vue.component('TWTabs', Tabs);
        Vue.component('TWTabItem', TabItem);
    },
};

export default Plugin;

export {
    Tabs as TWTabs,
    TabItem as TWTabItem,
};
