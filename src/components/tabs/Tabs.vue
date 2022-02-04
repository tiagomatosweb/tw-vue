<template>
    <div :class="baseClass">
        <div :class="navWrapClass">
            <nav :class="navClass">
                <a
                    v-for="(tab, index) in tabs"
                    :key="tab.id"
                    href="#"
                    :class="[
                        linkClass,
                        tab.is_active ? activeLinkClass : inactiveLinkClass
                    ]"
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
    import VariantMixin from '../../utils/VariantMixin';

    export default {
        name: 'TWTabs',
        mixins: [VariantMixin],
        props: {
            defaultTab: {
                type: Number,
                default: 0
            },
        },
        provide() {
            return {
                Tabs: this,
            };
        },
        data() {
            return {
                tabs: [],
                config: this.$TWVue.Tab,
            };
        },
        computed: {
            baseClass() {
                return [
                    this.config.base,
                    this.getVariant.base,
                ];
            },
            navWrapClass() {
                return [
                    this.getVariant.navWrap,
                ];
            },
            navClass() {
                return [
                    this.getVariant.baseNav,
                ];
            },
            linkClass() {
                return [
                    this.getVariant.baseLink,
                ];
            },
            activeLinkClass() {
                return [
                    this.getVariant.activeLink,
                ];
            },
            inactiveLinkClass() {
                return [
                    this.getVariant.inactiveLink,
                ];
            },
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
