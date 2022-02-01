<template>
    <div>
        <h3 class="text-lg font-bold mb-2">
            Tabs
        </h3>

        <TWTabs>
            <TWTab 
                v-for="nav in menu"
                :key="nav.key"
                :header="nav.label" 
                @click="testFunct()"
            >
                {{ nav.content }}
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
                menu: [
                    {
                        label: 'Tab 1',
                        content: 'Content tab 1',
                        route: { name: 'index' },
                        is_active: false,
                    },
                    {
                        label: 'Tab 2',
                        route: { name: 'invoices' },
                        content: 'Content tab 2',
                        is_active: false,
                    },
                    {
                        label: 'Tab 3',
                        route: { name: 'customers' },
                        content: 'Content tab 3',
                        is_active: false,
                    },
                ],
            };
        },

        methods: {
            testFunct(nav) {
                console.log(nav);
                this.menu.forEach((o) => {
                    o.is_active = o.route.name === this.$route.name;
                });
            },
        },
    };
</script>
