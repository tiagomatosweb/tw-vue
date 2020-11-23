import { merge } from 'lodash';
import TWAlert from '@/components/TWAlert';
import TWButton from '@/components/TWButton';
// import TwCard from '@/components/TwCard';
import TWFormInput from '@/components/TWFormInput';
import TWLabel from '@/components/TWLabel';
// import TwDropdown from '@/components/TwDropdown';
// import TwDropdownItem from '@/components/TwDropdownItem';
// import TwDropdownDivider from '@/components/TwDropdownDivider';
// import TwHelpText from '@/components/TwHelpText';
// import TwSpinner from '@/components/TwSpinner';
// import TwBadge from '@/components/TwBadge';
import buttonConfig from '@/utils/buttons';
import inputConfig from '@/utils/inputs';
import alertConfig from '@/utils/alerts';
import labelConfig from '@/utils/label';

export default {
    install(Vue, options) {
        if (this.installed) {
            return;
        }

        this.installed = true;

        Vue.prototype.$TWVue = {
            TWButton: merge(buttonConfig, options?.TWButton?.extend),
            TWFormInput: merge(inputConfig, options?.TWFormInput?.extend),
            TWAlert: merge(alertConfig, options?.TWAlert?.extend),
            TWLabel: merge(labelConfig, options?.TWLabel?.extend),
        };

        Vue.component('TWButton', TWButton);
        Vue.component('TWFormInput', TWFormInput);
        Vue.component('TWAlert', TWAlert);
        Vue.component('TWLabel', TWLabel);
        // Vue.component('TwCard', TwCard);
        // Vue.component('TWFormInput', TWFormInput);
        // Vue.component('TwDropdown', TwDropdown);
        // Vue.component('TwDropdownItem', TwDropdownItem);
        // Vue.component('TwDropdownDivider', TwDropdownDivider);
        // Vue.component('TwHelpText', TwHelpText);
        // Vue.component('TwSpinner', TwSpinner);
        // Vue.component('TwBadge', TwBadge);
    },
};

