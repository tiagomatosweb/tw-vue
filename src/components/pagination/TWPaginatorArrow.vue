<template>
    <button
        type="button"
        :class="classList"
        :disabled="disabled"
        v-on="listeners"
    >
        <slot>
            <svg
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path
                    fill-rule="evenodd"
                    :d="arrowDirectionSvg"
                    clip-rule="evenodd"
                />
            </svg>
        </slot>
    </button>
</template>

<script>
    export default {
        name: 'TWPaginatorArrow',

        props: {
            next: {
                type: Boolean,
                default: false,
            },

            disabled: {
                type: Boolean,
                default: false,
            },
        },

        data() {
            return {
            };
        },

        computed: {
            classList() {
                return [
                    'relative inline-flex items-center px-2 py-2 bg-white border text-sm leading-5 font-medium focus:z-10 hover:z-10 focus:outline-none transition ease-in-out duration-150',
                    this.getTextColorClass,
                    this.getBorderColorClass,
                    this.getBorderRoundClass,
                    this.getBgColorClass,
                    this.getMarginClass,
                ];
            },

            getTextColorClass() {
                return this.disabled ? 'text-blue-gray-gray-300 hover:text-blue-gray-gray-300' : 'text-blue-gray-gray-400 hover:text-blue-400 active:text-white';
            },

            getBorderColorClass() {
                return this.disabled ? 'border-blue-gray-gray-100' : 'border-blue-gray-gray-100 hover:border-blue-400';
            },

            getBorderRoundClass() {
                return this.next ? 'rounded-r-md' : 'rounded-l-md';
            },

            getBgColorClass() {
                return this.disabled ? 'bg-white' : 'bg-white active:bg-blue-400 ';
            },

            getMarginClass() {
                return this.next ? '-ml-px' : '';
            },

            arrowDirectionSvg() {
                return this.next ? 'M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' : 'M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z';
            },

            listeners() {
                return this.$listeners;
            },
        },
    };
</script>
