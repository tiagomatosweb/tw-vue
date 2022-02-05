<template>
    <div
        v-show="is_active"
        :class="itemClass"
    ><slot /></div>
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
        created() {
            this.Tabs.createTab(this);
        },
        computed: {
            itemClass() {
                return [
                    this.Tabs.fixedClass.tabItem,
                    this.Tabs.variantClass.tabItem,
                ];
            },
        },
        data() {
            return {
                is_active: false,
            };
        },
    };
</script>
