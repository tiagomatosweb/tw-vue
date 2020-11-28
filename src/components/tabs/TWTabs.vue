<template>
    <div>
        <div class="border-b border-blue-gray-200">
            <nav class="-mb-px flex space-x-8">
                <a
                    v-for="(tab, index) in tabs"
                    :key="tab.id"
                    href="#"
                    class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                    :class="{ 'border-blue-500 text-blue-600': tab.is_active, 'text-blue-gray-500 border-transparent hover:text-blue-gray-700 hover:border-blue-gray-300': !tab.is_active }"
                    @click.stop.prevent="activateTabByIndex(index)"
                >
                    {{ tab.header }}
                </a>
            </nav>
        </div>

        <div class="mt-8">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TWTabs',

        props: {
            defaultTab: {
                type: Number,
                default: 0,
            },
        },

        data() {
            return {
                tabs: [],
            };
        },

        methods: {
            createTab(tab) {
                tab.id = this.tabs.length + 1;
                this.tabs.push(tab);

                const index = this.defaultTab;
                if (index <= this.tabs.length - 1) {
                    this.activateTabByIndex(index);
                }
            },

            activateTabByIndex(index) {
                this.tabs.forEach((tab, idx) => {
                    tab.is_active = idx === parseInt(index, 0);
                });

                this.onActivateTab();
            },

            getActivatedTab() {
                return this.tabs.find(o => o.is_active);
            },

            onActivateTab() {
                const tab = this.getActivatedTab();
                this.$emit('activate-tab', tab);
            },
        },
    };
</script>
