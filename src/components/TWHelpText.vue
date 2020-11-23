<template>
    <small :class="classList">
        <slot />
    </small>
</template>

<script>
    export default {
        name: 'TWHelpText',

        props: {
            variant: {
                type: String,
                default: 'default',
            },
        },

        data() {
            return {
                options: {},
            };
        },

        computed: {
            classList() {
                return [
                    this.options.base,
                    this.getVariant,
                ];
            },

            getVariant() {
                const variants = this.options.variants;
                return variants[this.variant];
            },
        },

        created() {
            this.options = this?.$TWVue?.TWHelpText || {};
        },
    };
</script>
