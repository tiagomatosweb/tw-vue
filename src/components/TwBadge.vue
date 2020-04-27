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

    const BADGE_SIZES = ['sm', 'lg'];

    export default {
        name: 'TwBadge',

        props: {
            theme: {
                type: String,
                default: 'gray',
                validator: value => TW_COLORS.includes(value),
            },

            size: {
                type: String,
                default: 'sm',
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
                    this.getBgClass,
                ];
            },

            getPaddingClass() {
                switch (this.size) {
                    case 'sm':
                        return 'px-2.5 py-0.5';
                    case 'lg':
                        return 'px-3 py-0.5';
                    default:
                        return '';
                }
            },

            getRoundedClass() {
                return this.pill ? 'rounded-full' : 'rounded';
            },

            getTextSizeClass() {
                switch (this.size) {
                    case 'sm':
                        return 'text-xs';
                    case 'lg':
                        return 'text-sm';
                    default:
                        return '';
                }
            },

            getTextColorClass() {
                return `text-${this.theme}-800`;
            },

            getBgClass() {
                return `bg-${this.theme}-100`;
            },

            getLeadingClass() {
                switch (this.size) {
                    case 'sm':
                        return 'leading-4';
                    case 'lg':
                        return 'leading-5';
                    default:
                        return '';
                }
            },

            svgClassList() {
                return [
                    `-ml-0.5 mr-1.5 h-2 w-2 text-${this.theme}-400`,
                ];
            },

            xButtonClassList() {
                return [
                    `flex-shrink-0 ml-1.5 inline-flex text-${this.theme}-500 focus:outline-none focus:text-${this.theme}-700`,
                ];
            },
        },
    };
</script>
