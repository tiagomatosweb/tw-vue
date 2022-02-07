import ProgressBar from "./ProgressBar";
import { merge } from "lodash";
import config from "./config";
const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) {
            Vue.prototype.$TWVue = {};
        }
        Vue.prototype.$TWVue.Progressbar = merge(config, options);
        Vue.component("TWProgressBar", ProgressBar);
    }
};
export default Plugin;
export { ProgressBar as TWSProgressBar };
