<template>
    <div :class="classList">
        <Component :is="noBody ? 'div' : 'TWCardBody'">
            <slot />
        </Component>
    </div>
</template>

<script>
    import TWCardBody from '../card/TWCardBody';

    export default {
        name: 'TWCard',

        props: {
            variant: {
                type: String,
                default: 'default',
            },
            noBody: {
                type: Boolean,
                default: false,
            },
        },

        components: {
            TWCardBody,
        },

        data() {
            return {
                TWOptions: {},
            };
        },

        computed: {
            classList() {
                return [
                    this.TWOptions.base,
                    this.getVariant,
                ];
            },

            getVariant() {
                const variants = this.TWOptions.variants;
                return variants[this.variant];
            },
        },

        created() {
            this.TWOptions = this?.$TWVue?.TWCard || {};
        },
    };
</script>
