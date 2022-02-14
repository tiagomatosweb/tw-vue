import DataTable from './DataTable';
import { merge } from 'lodash';
import config from './config';

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue.DataTable = merge(config, options);

        Vue.component(DataTable.name, DataTable);
    },
};

export default Plugin;

export {
    DataTable as TWDataTable,
};
