<template>
    <span :class="classList">
        <slot />
    </span>
</template>

<script>
    export default {
        name: 'TWBadge',

        props: {
            variant: {
                type: String,
                default: 'default',
            },
            size: {
                type: String,
                default: 'md',
            },
        },

        computed: {
            classList() {
                return [
                    this.TWOptions.base,
                    this.getVariant,
                    this.getSize,
                ];
            },

            getVariant() {
                const variants = this.TWOptions.variants;
                return variants[this.variant];
            },

            getSize() {
                const sizes = this.TWOptions.sizes;
                return sizes[this.size];
            },
        },

        created() {
            this.TWOptions = this?.$TWVue?.TWBadge || {};
        },
    };
</script>
