<template>
    <div :class="rootClass">
        <Component :is="computedBodyTag">
            <slot />
        </Component>
    </div>
</template>

<script>
import FixedMixin from '../../utils/FixedMixin';
import VariantMixin from '../../utils/VariantMixin';
import CardBody from '../card/CardBody';

export default {
    name: 'TWCard',
    mixins: [FixedMixin, VariantMixin],
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
        rootClass() {
            return [
                this.fixedClass.root,
                this.variantClass.root,
            ];
        },
        computedBodyTag() {
            return this.noBody ? 'div' : 'CardBody';
        },
    },
};
</script>
