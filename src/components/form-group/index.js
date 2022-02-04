import Component from './FormGroup';

const componentName = Component.name;

const Plugin = {
    install(Vue) {
        Vue.component(componentName, Component);
    },
};

export default Plugin;

export {
    Component as componentName,
};
