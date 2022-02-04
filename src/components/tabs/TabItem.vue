<template>
    <div v-show="is_active">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'TWTabItem',
        props: {
            header: {
                type: String,
                required: true,
            },
        },
        inject: {
            'Tabs': {
                default: undefined,
            },
        },
        mounted() {
            this.Tabs.createTab(this);
        },
        data() {
            return {
                is_active: false,
            };
        },
    };
</script>
