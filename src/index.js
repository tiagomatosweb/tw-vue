import { merge } from 'lodash';
import Alert from '@/components/alert/Alert';
import Avatar from '@/components/avatar/Avatar';
import Tag from '@/components/tag/Tag';
// import Button from '@/components/button/Button';

import alertConfig from '@/components/alert/config';
import avatarConfig from '@/components/avatar/config';
import tagConfig from '@/components/tag/config';
// import TWButtonClose from '@/components/button-close/TWButtonClose';
// import TWCard from '@/components/card/TWCard';
// import TWCardBody from '@/components/card/TWCardBody';
// import TWFormGroup from '@/components/form-group/TWFormGroup';
// import TWFormInput from '@/components/form-input/TWFormInput';
// import TWFormFile from '@/components/form-file/TWFormFile';
// import TWFormTextarea from '@/components/form-textarea/TWFormTextarea';
// import TWFormSelect from '@/components/form-select/TWFormSelect';
// import TWFormSelectOption from '@/components/form-select/TWFormSelectOption';
// import TWFormLabel from '@/components/form-label/TWFormLabel';
// import TWSpinner from '@/components/spinner/TWSpinner';
// import TWDropdown from '@/components/dropdown/TWDropdown';
// import TWDropdownItem from '@/components/dropdown/TWDropdownItem';
// import TWDropdownDivider from '@/components/dropdown/TWDropdownDivider';
// import TWPagination from '@/components/pagination/TWPagination';
// import TWTabs from '@/components/tabs/TWTabs';
// import TWTab from '@/components/tabs/TWTab';
// import TWModal from '@/components/modal/TWModal';
// import TWToggle from '@/components/toggle/TWToggle';
// import buttonConfig from '@/components/button/config';
// import buttonCloseConfig from '@/components/button-close/config';
// import inputConfig from '@/components/form-input/config';
// import selectConfig from '@/components/form-select/config';
// import labelConfig from '@/components/form-label/config';
// import helpTextConfig from '@/components/help-text/config';
// import spinnerConfig from '@/components/spinner/config';
// import dropdownConfig from '@/components/dropdown/config';
// import cardConfig from '@/components/card/config';
// import modalConfig from '@/components/modal/config';
// import toggleConfig from '@/components/toggle/config';

export default {
    install(Vue, options) {
        if (this.installed) {
            return;
        }

        this.installed = true;

        Vue.prototype.$TWVue = {
            Alert: merge(alertConfig, options?.Alert?.extend),
            Avatar: merge(avatarConfig, options?.Avatar?.extend),
            Tag: merge(tagConfig, options?.Tag?.extend),
            // Button: merge(buttonConfig, options?.Button?.extend),

            // TWButtonClose: merge(buttonCloseConfig, options?.TWButtonClose?.extend),
            // TWFormInput: merge(inputConfig, options?.TWFormInput?.extend),
            // TWFormSelect: merge({ ...inputConfig, ...selectConfig }, options?.TWFormSelect?.extend),
            // TWFormLabel: merge(labelConfig, options?.TWFormLabel?.extend),
            // TWHelpText: merge(helpTextConfig, options?.TWHelpText?.extend),
            // TWSpinner: merge(spinnerConfig, options?.TWSpinner?.extend),
            // TWDropdown: merge(dropdownConfig, options?.TWDropdown?.extend),
            // TWCard: merge(cardConfig, options?.TWCard?.extend),
            // TWModal: merge(modalConfig, options?.TWModal?.extend),
            // TWToggle: merge(toggleConfig, options?.TWToggle?.extend),
        };

        Vue.component('TWAlert', Alert);
        Vue.component('TWAvatar', Avatar);
        Vue.component('TWBadge', Tag);
        // Vue.component('TWButton', Button);

        // Vue.component('TWButtonClose', TWButtonClose);
        // Vue.component('TWFormGroup', TWFormGroup);
        // Vue.component('TWFormInput', TWFormInput);
        // Vue.component('TWFormFile', TWFormFile);
        // Vue.component('TWFormTextarea', TWFormTextarea);
        // Vue.component('TWFormSelect', TWFormSelect);
        // Vue.component('TWFormSelectOption', TWFormSelectOption);
        // Vue.component('TWFormLabel', TWFormLabel);
        // Vue.component('TWSpinner', TWSpinner);
        // Vue.component('TWHelpText', TWHelpText);
        // Vue.component('TWDropdown', TWDropdown);
        // Vue.component('TWDropdownItem', TWDropdownItem);
        // Vue.component('TWDropdownDivider', TWDropdownDivider);
        // Vue.component('TWCard', TWCard);
        // Vue.component('TWCardBody', TWCardBody);
        // Vue.component('TWPagination', TWPagination);
        // Vue.component('TWTabs', TWTabs);
        // Vue.component('TWTab', TWTab);
        // Vue.component('TWModal', TWModal);
        // Vue.component('TWToggle', TWToggle);
    },
};

