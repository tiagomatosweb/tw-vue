import { merge } from 'lodash';
import TWAlert from '@/components/alert/TWAlert';
import TWButton from '@/components/button/TWButton';
import TWButtonClose from '@/components/button-close/TWButtonClose';
import TWAvatar from '@/components/avatar/TWAvatar';
import TWCard from '@/components/card/TWCard';
import TWCardBody from '@/components/card/TWCardBody';
import TWFormGroup from '@/components/form-group/TWFormGroup';
import TWFormInput from '@/components/form-input/TWFormInput';
import TWFormTextarea from '@/components/form-textarea/TWFormTextarea';
import TWFormSelect from '@/components/form-select/TWFormSelect';
import TWFormSelectOption from '@/components/form-select/TWFormSelectOption';
import TWFormLabel from '@/components/form-label/TWFormLabel';
import TWSpinner from '@/components/spinner/TWSpinner';
import TWDropdown from '@/components/dropdown/TWDropdown';
import TWDropdownItem from '@/components/dropdown/TWDropdownItem';
import TWDropdownDivider from '@/components/dropdown/TWDropdownDivider';
import TWHelpText from '@/components/help-text/TWHelpText';
import TWPagination from '@/components/pagination/TWPagination';
import TWTabs from '@/components/tabs/TWTabs';
import TWTab from '@/components/tabs/TWTab';
import TWBadge from '@/components/badge/TWBadge';
import buttonConfig from '@/utils/button';
import buttonCloseConfig from '@/utils/buttonClose';
import inputConfig from '@/utils/inputs';
import alertConfig from '@/utils/alert';
import labelConfig from '@/utils/label';
import helpTextConfig from '@/utils/helpText';
import avatarConfig from '@/utils/avatar';
import dropdownConfig from '@/utils/dropdown';
import cardConfig from '@/utils/card';
import badgeConfig from '@/utils/badge';

export default {
    install(Vue, options) {
        if (this.installed) {
            return;
        }

        this.installed = true;

        Vue.prototype.$TWVue = {
            TWButton: merge(buttonConfig, options?.TWButton?.extend),
            TWButtonClose: merge(buttonCloseConfig, options?.TWButtonClose?.extend),
            TWFormInput: merge(inputConfig, options?.TWFormInput?.extend),
            TWFormSelect: merge(inputConfig, options?.TWFormSelect?.extend),
            TWAlert: merge(alertConfig, options?.TWAlert?.extend),
            TWFormLabel: merge(labelConfig, options?.TWFormLabel?.extend),
            TWHelpText: merge(helpTextConfig, options?.TWHelpText?.extend),
            TWAvatar: merge(avatarConfig, options?.TWAvatar?.extend),
            TWDropdown: merge(dropdownConfig, options?.TWDropdown?.extend),
            TWCard: merge(cardConfig, options?.TWCard?.extend),
            TWBadge: merge(badgeConfig, options?.TWBadge?.extend),
        };

        Vue.component('TWButton', TWButton);
        Vue.component('TWButtonClose', TWButtonClose);
        Vue.component('TWButton', TWButton);
        Vue.component('TWFormGroup', TWFormGroup);
        Vue.component('TWFormInput', TWFormInput);
        Vue.component('TWFormTextarea', TWFormTextarea);
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
        Vue.component('TWCard', TWCard);
        Vue.component('TWCardBody', TWCardBody);
        Vue.component('TWPagination', TWPagination);
        Vue.component('TWTabs', TWTabs);
        Vue.component('TWTab', TWTab);
        Vue.component('TWBadge', TWBadge);
    },
};

