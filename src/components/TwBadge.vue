<template>
    <span :class="classList">
        <svg
            v-if="dot"
            :class="svgClassList"
            fill="currentColor"
            viewBox="0 0 8 8"
        >
            <circle
                cx="4"
                cy="4"
                r="3"
            />
        </svg>

        <slot />

        <button
            v-if="removable"
            type="button"
            :class="xButtonClassList"
            @click.stop.prevent="$emit('remove')"
        >
            <svg
                class="h-2 w-2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 8 8"
            >
                <path
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="M1 1l6 6m0-6L1 7"
                />
            </svg>
        </button>
    </span>
</template>

<script>
    import { TW_COLORS } from '@/utils/variants';

    const BADGE_SIZES = ['sm', 'md', 'lg'];

    export default {
        name: 'TwBadge',

        props: {
            theme: {
                type: String,
                default: 'light',
                validator: value => ['light', 'dark'].includes(value),
            },

            color: {
                type: String,
                default: 'gray',
                validator: value => TW_COLORS.includes(value),
            },

            size: {
                type: String,
                default: 'md',
                validator: value => BADGE_SIZES.includes(value),
            },

            pill: {
                type: Boolean,
                default: false,
            },

            removable: {
                type: Boolean,
                default: false,
            },

            dot: {
                type: Boolean,
                default: false,
            },
        },

        computed: {
            classList() {
                return [
                    'inline-flex items-center font-medium',
                    this.getPaddingClass,
                    this.getRoundedClass,
                    this.getTextSizeClass,
                    this.getTextColorClass,
                    this.getLeadingClass,
                    this.getBgColorClass,
                ];
            },

            getPaddingClass() {
                const sizes = {
                    sm: 'px-1.5 py-0.5',
                    md: 'px-2.5 py-0.5',
                    lg: 'px-3 py-0.5',
                };

                return sizes[this.size];
            },

            getRoundedClass() {
                return this.pill ? 'rounded-full' : 'rounded';
            },

            getTextSizeClass() {
                const sizes = {
                    sm: 'text-xxs',
                    md: 'text-xs',
                    lg: 'text-sm',
                };

                return sizes[this.size];
            },

            getTextColorClass() {
                const themes = {
                    light: `text-${this.color}-800`,
                    dark: `text-${this.color}-800`,
                };

                return themes[this.theme];
            },

            getBgColorClass() {
                const themes = {
                    light: `bg-${this.color}-100`,
                    dark: `bg-${this.color}-300`,
                };

                return themes[this.theme];
            },

            getLeadingClass() {
                const sizes = {
                    sm: 'leading-3',
                    md: 'leading-4',
                    lg: 'leading-5',
                };

                return sizes[this.size];
            },

            svgClassList() {
                return [
                    `-ml-0.5 mr-1.5 h-2 w-2 text-${this.color}-400`,
                ];
            },

            xButtonClassList() {
                return [
                    `flex-shrink-0 ml-1.5 inline-flex text-${this.color}-500 focus:outline-none focus:text-${this.color}-700`,
                ];
            },
        },
    };
</script>
