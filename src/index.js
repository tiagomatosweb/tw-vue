// import TwAlert from '@/components/TwAlert';
import TwButton from '@/components/TwButton';
// import TwCard from '@/components/TwCard';
// import TwFormInput from '@/components/TwFormInput';
// import TwDropdown from '@/components/TwDropdown';
// import TwDropdownItem from '@/components/TwDropdownItem';
// import TwDropdownDivider from '@/components/TwDropdownDivider';
// import TwHelpText from '@/components/TwHelpText';
// import TwLabel from '@/components/TwLabel';
// import TwSpinner from '@/components/TwSpinner';
// import TwBadge from '@/components/TwBadge';
import { VARIANTS_CLASS, SIZES_CLASS, BASE_CSS } from '@/utils/buttons';

export default {
    install(Vue, options) {
        if (this.installed) {
            return;
        }

        this.installed = true;

        Vue.prototype.$TWVue = {
            TWButton: {
                base: BASE_CSS,
                variants: { ...VARIANTS_CLASS, ...options?.TWButton?.extend?.variants },
                sizes: { ...SIZES_CLASS, ...options?.TWButton?.extend?.sizes },
            },
        };

        Vue.component('TwButton', TwButton);
        // Vue.component('TwAlert', TwAlert);
        // Vue.component('TwCard', TwCard);
        // Vue.component('TwFormInput', TwFormInput);
        // Vue.component('TwDropdown', TwDropdown);
        // Vue.component('TwDropdownItem', TwDropdownItem);
        // Vue.component('TwDropdownDivider', TwDropdownDivider);
        // Vue.component('TwHelpText', TwHelpText);
        // Vue.component('TwLabel', TwLabel);
        // Vue.component('TwSpinner', TwSpinner);
        // Vue.component('TwBadge', TwBadge);
    },
};

