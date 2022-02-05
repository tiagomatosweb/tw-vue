<template>
    <div :class="bodyClass">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'TWCardBody',
    inject: {
        'Card': {
            default: undefined,
        },
    },
    computed: {
        bodyClass() {
            return [
                this.Card.fixedClass.body,
                this.Card.variantClass.body,
            ];
        },
    },
};
</script>
