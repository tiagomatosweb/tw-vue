import { merge } from 'lodash';
import TWAlert from '@/components/alert/TWAlert';
import TWButton from '@/components/button/TWButton';
import TWAvatar from '@/components/avatar/TWAvatar';
// import TwCard from '@/components/TwCard';
import TWFormGroup from '@/components/form-group/TWFormGroup';
import TWFormInput from '@/components/form-input/TWFormInput';
import TWFormSelect from '@/components/form-select/TWFormSelect';
import TWFormSelectOption from '@/components/form-select/TWFormSelectOption';
import TWFormLabel from '@/components/form-label/TWFormLabel';
import TWSpinner from '@/components/spinner/TWSpinner';
import TWDropdown from '@/components/dropdown/TWDropdown';
import TWDropdownItem from '@/components/dropdown/TWDropdownItem';
import TWDropdownDivider from '@/components/dropdown/TWDropdownDivider';
// import TwDropdownItem from '@/components/TwDropdownItem';
// import TwDropdownDivider from '@/components/TwDropdownDivider';
import TWHelpText from '@/components/help-text/TWHelpText';
// import TwBadge from '@/components/TwBadge';
import buttonConfig from '@/utils/button';
import inputConfig from '@/utils/inputs';
import alertConfig from '@/utils/alert';
import labelConfig from '@/utils/label';
import helpTextConfig from '@/utils/helpText';
import avatarConfig from '@/utils/avatar';
import dropdownConfig from '@/utils/dropdown';

export default {
    install(Vue, options) {
        if (this.installed) {
            return;
        }

        this.installed = true;

        Vue.prototype.$TWVue = {
            TWButton: merge(buttonConfig, options?.TWButton?.extend),
            TWFormInput: merge(inputConfig, options?.TWFormInput?.extend),
            TWFormSelect: merge(inputConfig, options?.TWFormSelect?.extend),
            TWAlert: merge(alertConfig, options?.TWAlert?.extend),
            TWFormLabel: merge(labelConfig, options?.TWFormLabel?.extend),
            TWHelpText: merge(helpTextConfig, options?.TWHelpText?.extend),
            TWAvatar: merge(avatarConfig, options?.TWAvatar?.extend),
            TWDropdown: merge(dropdownConfig, options?.TWDropdown?.extend),
        };

        Vue.component('TWButton', TWButton);
        Vue.component('TWFormGroup', TWFormGroup);
        Vue.component('TWFormInput', TWFormInput);
        Vue.component('TWFormSelect', TWFormSelect);
        Vue.component('TWFormSelectOption', TWFormSelectOption);
        Vue.component('TWAlert', TWAlert);
        Vue.component('TWFormLabel', TWFormLabel);
        Vue.component('TWSpinner', TWSpinner);
        Vue.component('TWHelpText', TWHelpText);
        Vue.component('TWAvatar', TWAvatar);
        Vue.component('TWDropdown', TWDropdown);
        Vue.component('TWDropdownItem', TWDropdownItem);
        Vue.component('TWDropdownDivider', TWDropdownDivider);
        // Vue.component('TwCard', TwCard);
        // Vue.component('TWFormInput', TWFormInput);
        // Vue.component('TwDropdown', TwDropdown);
        // Vue.component('TwDropdownItem', TwDropdownItem);
        // Vue.component('TwDropdownDivider', TwDropdownDivider);
        // Vue.component('TwBadge', TwBadge);
    },
};

