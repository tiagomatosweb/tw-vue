<template>
    <div :class="baseClass">
        <Component :is="computedBodyTag">
            <slot />
        </Component>
    </div>
</template>

<script>
    import CardBody from '../card/CardBody';
    import VariantMixin from '../../utils/VariantMixin';

    export default {
        name: 'TWCard',
        mixins: [VariantMixin],
        props: {
            noBody: Boolean
        },
        provide() {
            return {
                Card: this,
            };
        },
        components: {
            CardBody,
        },
        data() {
            return {
                config: this.$TWVue.Card,
            };
        },
        computed: {
            baseClass() {
                return [
                    this.config.base,
                    this.getVariant.base,
                ];
            },

            computedBodyTag() {
                return this.noBody ? 'div' : 'CardBody';
            },
        },
    };
</script>
