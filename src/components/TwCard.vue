<template>
    <div
        :class="classList"
        @mouseover="isElevatedActive = true"
        @mouseout="isElevatedActive = false"
    >
        <div :class="bodyClassList">
            <slot />
        </div>
    </div>
</template>

<script>
    import { TW_COLORS } from '@/utils/variant';

    export default {
        name: 'TwCard',

        props: {
            theme: {
                type: String,
                default: 'white',
                validator: value => TW_COLORS.includes(value),
            },

            shadow: {
                type: [String, Boolean],
                default: undefined,
                validator: value => ['', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'inner', 'outline'].includes(value),
            },

            elevated: {
                type: String,
                default: '',
                validator: value => ['', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'].includes(value),
            },

            rounded: {
                type: [String, Boolean],
                default: undefined,
                validator: value => ['', 'sm', 'md', 'lg', 'full'].includes(value),
            },

            bordered: {
                type: Boolean,
                default: false,
            },

            borderStyle: {
                type: String,
                default: 'none',
                validator: value => ['solid', 'dashed', 'dotted', 'double', 'none'].includes(value),
            },

            noBody: {
                type: Boolean,
                default: false,
            },
        },

        data() {
            return {
                isElevatedActive: false,
            };
        },

        computed: {
            classList() {
                return [
                    'rounded-sm transition duration-300 ease-in-out',
                    this.getBgColorClass,
                    this.getBorderClass,
                    this.getBorderColorClass,
                    this.getBorderStyleClass,
                    this.getShadowClass,
                    this.getShadowElevatedClass,
                    this.getBorderRoundedClass,
                ];
            },

            bodyClassList() {
                return !this.noBody ? 'px-4 py-4 sm:px-6' : '';
            },

            getBgColorClass() {
                if (this.theme === 'white') {
                    return 'bg-white';
                }

                return `bg-${this.theme}-100`;
            },

            getBorderClass() {
                return this.bordered ? 'border' : '';
            },

            getBorderColorClass() {
                if (this.theme === 'white') {
                    return false;
                }

                return this.bordered ? `border-${this.theme}-300` : '';
            },

            getBorderStyleClass() {
                return this.bordered ? `border-${this.borderStyle}` : '';
            },

            getShadowClass() {
                if (this.shadow === '') {
                    return 'shadow';
                }
                return this.shadow ? `shadow-${this.shadow}` : '';
            },

            getShadowElevatedClass() {
                if (!this.isElevatedActive) {
                    return false;
                }

                return this.elevated ? `transform shadow-${this.elevated} -translate-y-px` : '';
            },

            getBorderRoundedClass() {
                if (this.rounded === '') {
                    return 'rounded';
                }
                return this.rounded ? `rounded-${this.rounded}` : '';
            },
        },
    };
</script>
