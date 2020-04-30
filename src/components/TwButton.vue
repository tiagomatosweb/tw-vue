<template>
    <button
        :type="type"
        :disabled="isBusy || disabled"
        :class="classList"
        v-on="inputListeners"
    >
        <TwSpinner
            v-if="isBusy"
            class="mr-2"
        />

        <slot />
    </button>
</template>

<script>
    import { TW_COLORS } from '@/utils/variants';
    import TwSpinner from '@/components/TwSpinner';

    export default {
        name: 'TwButton',

        components: {
            TwSpinner,
        },

        props: {
            type: {
                type: String,
                default: 'button',
            },

            theme: {
                type: String,
                default: 'gray',
                validator: value => TW_COLORS.includes(value),
            },

            btnClass: {
                type: String,
                default: '',
            },

            size: {
                type: String,
                default: 'md',
                validator: value => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value),
            },

            shadow: {
                type: String,
                default: null,
                validator: value => [null, 'md', 'lg', 'xl', '2xl', 'inner', 'outline', 'none'].includes(value),
            },

            block: {
                type: Boolean,
                default: false,
            },

            isBusy: {
                type: Boolean,
                default: false,
            },

            disabled: {
                type: Boolean,
                default: false,
            },

            clean: {
                type: Boolean,
                default: false,
            },
        },

        data() {
            return {};
        },

        computed: {
            classList() {
                if (this.btnClass) {
                    return this.btnClass;
                }

                return [
                    'inline-flex items-center justify-center font-medium rounded transition ease-in-out duration-150',
                    this.getTextColorClass,
                    this.getBgColorClass,
                    this.getBlockClass,
                    this.getDisabledClass,
                    this.getTextSizeClass,
                    this.getPaddingClass,
                    this.getBorderClass,
                    this.getShadowClass,
                ];
            },

            getTextSizeClass() {
                switch (this.size) {
                    case 'xs':
                        return 'text-xs leading-4';
                    case 'sm':
                        return 'text-sm leading-4';
                    case 'md':
                        return 'text-sm leading-5';
                    case 'lg':
                        return 'text-base leading-6';
                    case 'xl':
                        return 'text-base leading-6';
                    default:
                        return '';
                }
            },

            getTextColorClass() {
                if (this.clean) {
                    return `text-${this.theme}-800`;
                }

                return `text-${this.theme}-100`;
            },

            getBgColorClass() {
                if (this.clean) { return false; }
                return `bg-${this.theme}-600 ${!this.isBusy ? `hover:bg-${this.theme}-500 active:bg-${this.theme}-700 focus:shadow-outline-${this.theme}` : ''}`;
            },

            getPaddingClass() {
                if (this.clean) { return ''; }

                switch (this.size) {
                    case 'xs':
                        return 'px-2.5 py-1.5';
                    case 'sm':
                        return 'px-3 py-2';
                    case 'md':
                        return 'px-4 py-2';
                    case 'lg':
                        return 'px-4 py-2';
                    case 'xl':
                        return 'px-6 py-3';
                    default:
                        return '';
                }
            },

            getBlockClass() {
                return this.block ? 'w-full justify-center' : '';
            },

            getDisabledClass() {
                return this.isBusy ? 'opacity-75' : '';
            },

            getBorderClass() {
                return 'border border-transparent focus:outline-none';
            },

            getShadowClass() {
                return this.shadow ? `shadow-${this.shadow}` : '';
            },

            inputListeners() {
                return this.$listeners;
            },
        },
    };
</script>
