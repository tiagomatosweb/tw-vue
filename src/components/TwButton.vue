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
                default: 'light',
                validator: value => ['light', 'dark', 'darker'].includes(value),
            },

            color: {
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

            pill: {
                type: Boolean,
                default: false,
            },

            outline: {
                type: Boolean,
                default: false,
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

            naked: {
                type: Boolean,
                default: false,
            },

            noPadding: {
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
                    'inline-flex items-center justify-center font-medium transition ease-in-out duration-150',
                    this.getTextColorClass,
                    this.getBgColorClass,
                    this.getBlockClass,
                    this.getDisabledClass,
                    this.getTextSizeClass,
                    this.getPaddingClass,
                    this.getBorderColorClass,
                    this.getBorderRoundedClass,
                    this.getShadowClass,
                ];
            },

            getTextSizeClass() {
                const sizes = {
                    xs: 'text-xs leading-4',
                    sm: 'text-sm leading-4',
                    md: 'text-sm leading-5',
                    lg: 'text-base leading-6',
                    xl: 'text-base leading-6',
                };

                return sizes[this.size];
            },

            getTextColorClass() {
                if (this.naked) {
                    return `text-${this.color}-800`;
                }

                const themes = {
                    light: `${this.outline ? `text-${this.color}-400 hover:text-${this.color}-500 active:text-${this.color}-400` : `text-${this.color}-800 hover:text-${this.color}-900` }`,
                    dark: `${this.outline ? `text-${this.color}-400 hover:text-${this.color}-500 active:text-${this.color}-500` : `text-${this.color}-800 hover:text-${this.color}-900` }`,
                    darker: `${this.outline ? `text-${this.color}-500 hover:text-${this.color}-600 active:text-${this.color}-600` : `text-${this.color}-50 hover:text-${this.color}-100` }`,
                };

                return themes[this.theme];
            },

            getBgColorClass() {
                if (this.naked || this.outline) { return false; }

                const themes = {
                    light: `bg-${this.color}-100 hover:bg-${this.color}-200 active:bg-${this.color}-200`,
                    dark: `bg-${this.color}-300 hover:bg-${this.color}-400 active:bg-${this.color}-400`,
                    darker: `bg-${this.color}-500 hover:bg-${this.color}-600 active:bg-${this.color}-600`,
                };

                return themes[this.theme];
            },

            getBorderColorClass() {
                const themes = {
                    light:
                        `border ${this.outline ? `border-${this.color}-300 hover:border-${this.color}-400 active:border-${this.color}-400` : 'border-transparent'} focus:shadow-outline-${this.color} focus:outline-none`,
                    dark:
                        `border ${this.outline ? `border-${this.color}-400 hover:border-${this.color}-500 active:border-${this.color}-500` : 'border-transparent'} focus:shadow-outline-${this.color} focus:outline-none`,
                    darker:
                        `border ${this.outline ? `border-${this.color}-500 hover:border-${this.color}-600 active:border-${this.color}-600` : 'border-transparent'} focus:shadow-outline-${this.color} focus:outline-none`,
                };

                return themes[this.theme];
            },

            getBorderRoundedClass() {
                return this.pill ? 'rounded-full' : 'rounded';
            },

            getPaddingClass() {
                if (this.noPadding) { return ''; }

                const sizes = {
                    xs: 'px-2.5 py-1.5',
                    sm: 'px-3 py-2',
                    md: 'px-4 py-2',
                    lg: 'px-4 py-2',
                    xl: 'px-6 py-3',
                };

                return sizes[this.size];
            },

            getBlockClass() {
                return this.block ? 'w-full justify-center' : '';
            },

            getDisabledClass() {
                return this.isBusy ? 'opacity-75' : '';
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
