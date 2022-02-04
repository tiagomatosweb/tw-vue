import HelpText from './HelpText';
import { merge } from 'lodash';
import config from './config';

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue.HelpText = merge(config, options);

        Vue.component('TWHelpText', HelpText);
    },
};

export default Plugin;

export {
    HelpText as TWHelpText,
};
