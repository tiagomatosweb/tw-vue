<template>
    <div 
        v-show="is_active"
    >
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'TWTab',

        props: {
            header: {
                type: String,
                required: true,
            },
        },

        mounted() {
            this.$parent.createTab(this);
        },

        data() {
            return {
                is_active: false,
            };
        },

        methods: {
        },
    };
</script>
