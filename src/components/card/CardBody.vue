<template>
    <div :class="baseClass">
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
            baseClass() {
                return this.Card.config.baseBody;
            },
        },
    };
</script>
