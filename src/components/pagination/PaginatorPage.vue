<template>
    <Component
        :is="disabled ? 'span' : 'button'"
        :type="type"
        :class="classList"
        v-on="listeners"
    >
        <slot />
    </Component>
</template>

<script>
    export default {
        name: 'TWPaginatorPage',

        props: {
            disabled: {
                type: Boolean,
                default: false,
            },
            active: {
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
                    '-ml-px relative inline-flex items-center px-4 py-2 border text-sm focus:outline-none leading-5 font-medium transition ease-in-out duration-150',
                    this.getTextColorClass,
                    this.getBorderColorClass,
                    this.getBgColorClass,
                    this.getZindexClass,
                ];
            },

            getTextColorClass() {
                if (this.active) {
                    return `text-white`;
                }

                return `text-blue-graygray-400 ${!this.disabled ? 'hover:text-blue-500 active:text-white' : ''}`;
            },

            getBorderColorClass() {
                if (this.active) {
                    return '';
                }

                return this.disabled ? 'border-blue-graygray-100' : 'border-blue-graygray-100 hover:border-blue-400';
            },

            getBgColorClass() {
                if (this.active) {
                    return `bg-blue-400`;
                }

                return this.disabled ? 'bg-white' : 'bg-white active:bg-blue-400';
            },

            getZindexClass() {
                return 'focus:z-10 hover:z-10';
            },

            type() {
                return this.disabled ? undefined : 'button';
            },

            listeners() {
                return this.$listeners;
            },
        },

        methods: {},
    };
</script>
