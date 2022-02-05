import FormSelect from './FormSelect';

const Plugin = {
    install(Vue) {
        Vue.component('TWFormSelect', FormSelect);
    },
};

export default Plugin;

export {
    FormSelect as TWFormSelect,
};
