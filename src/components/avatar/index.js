import Component from './Avatar';
import { merge } from 'lodash';
import config from './config';

const pluginName = Component.name.substr(2);
const componentName = Component.name;

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue[pluginName] = merge(config, options);

        Vue.component(componentName, Component);
    },
};

export default Plugin;

export {
    Component as componentName,
};
