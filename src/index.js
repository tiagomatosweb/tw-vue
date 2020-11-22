// import TwAlert from '@/components/TwAlert';
import TWButton from '@/components/TWButton';
// import TwCard from '@/components/TwCard';
import TWFormInput from '@/components/TWFormInput';
// import TwDropdown from '@/components/TwDropdown';
// import TwDropdownItem from '@/components/TwDropdownItem';
// import TwDropdownDivider from '@/components/TwDropdownDivider';
// import TwHelpText from '@/components/TwHelpText';
// import TwLabel from '@/components/TwLabel';
// import TwSpinner from '@/components/TwSpinner';
// import TwBadge from '@/components/TwBadge';
import buttonConfig from '@/utils/buttons';
import inputConfig from '@/utils/inputs';

export default {
    install(Vue, options) {
        if (this.installed) {
            return;
        }

        this.installed = true;

        Vue.prototype.$TWVue = {
            TWButton: {
                base: buttonConfig.base,
                variants: { ...buttonConfig.variants, ...options?.TWButton?.extend?.variants },
                sizes: { ...buttonConfig.sizes, ...options?.TWButton?.extend?.sizes },
            },
            TWFormInput: {
                base: inputConfig.base,
                variants: { ...inputConfig.variants, ...options?.TWFormInput?.extend?.variants },
                sizes: { ...inputConfig.sizes, ...options?.TWFormInput?.extend?.sizes },
            },
        };

        Vue.component('TWButton', TWButton);
        Vue.component('TWFormInput', TWFormInput);
        // Vue.component('TwAlert', TwAlert);
        // Vue.component('TwCard', TwCard);
        // Vue.component('TWFormInput', TWFormInput);
        // Vue.component('TwDropdown', TwDropdown);
        // Vue.component('TwDropdownItem', TwDropdownItem);
        // Vue.component('TwDropdownDivider', TwDropdownDivider);
        // Vue.component('TwHelpText', TwHelpText);
        // Vue.component('TwLabel', TwLabel);
        // Vue.component('TwSpinner', TwSpinner);
        // Vue.component('TwBadge', TwBadge);
    },
};

