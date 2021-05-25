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
import TWModal from '@/components/modal/TWModal';
import buttonConfig from '@/components/button/config';
import buttonCloseConfig from '@/components/button-close/config';
import inputConfig from '@/components/form-input/config';
import alertConfig from '@/components/alert/config';
import labelConfig from '@/components/form-label/config';
import helpTextConfig from '@/components/help-text/config';
import avatarConfig from '@/components/avatar/config';
import dropdownConfig from '@/components/dropdown/config';
import cardConfig from '@/components/card/config';
import badgeConfig from '@/components/badge/config';
import modalConfig from '@/components/modal/config';

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
            TWModal: merge(modalConfig, options?.TWModal?.extend),
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
        Vue.component('TWModal', TWModal);
    },
};

