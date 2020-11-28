<template>
    <div>
        <h3 class="text-lg font-bold mb-2">
            Tabs
        </h3>

        <TWTabs>
            <TWTab header="Tab 1">
                Content tab 1
            </TWTab>

            <TWTab header="Tab 2">
                Content tab 2
            </TWTab>

            <TWTab header="Tab 3">
                Content tab 3
            </TWTab>
        </TWTabs>
    </div>
</template>

<script>
    import TWTabs from '@/components/tabs/TWTabs';
    import TWTab from '@/components/tabs/TWTab';

    export default {
        name: 'Tabs',

        components: {
            TWTab, TWTabs,
        },

        data() {
            return {
            };
        },

        methods: {},
    };
</script>
