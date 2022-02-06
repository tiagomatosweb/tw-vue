import Drawer from './Drawer';
import { merge } from 'lodash';
import config from './config';

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue.Drawer = merge(config, options);

        Vue.component(Drawer.name, Drawer);
    },
};

export default Plugin;

export {
    Drawer as TWDrawer,
};
