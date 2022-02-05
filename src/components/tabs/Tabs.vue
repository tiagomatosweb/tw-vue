<template>
    <div :class="rootClass">
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
                >{{ tab.header }}
                </a>
            </nav>
        </div>

        <div :class="contentClass">
            <slot />
        </div>
    </div>
</template>

<script>
import FixedMixin from '../../utils/FixedMixin';
import VariantMixin from '../../utils/VariantMixin';

export default {
    name: 'TWTabs',
    mixins: [FixedMixin, VariantMixin],
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
        rootClass() {
            return [
                this.fixedClass.root,
                this.variantClass.root,
            ];
        },
        navWrapClass() {
            return [
                this.fixedClass.navWrap,
                this.variantClass.navWrap,
            ];
        },
        navClass() {
            return [
                this.fixedClass.nav,
                this.variantClass.nav,
            ];
        },
        linkClass() {
            return [
                this.fixedClass.link,
                this.variantClass.link,
            ];
        },
        activeLinkClass() {
            return [
                this.fixedClass.linkActive,
                this.variantClass.linkActive,
            ];
        },
        inactiveLinkClass() {
            return [
                this.fixedClass.linkInactive,
                this.variantClass.linkInactive,
            ];
        },
        contentClass() {
            return [
                this.fixedClass.content,
                this.variantClass.content,
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
