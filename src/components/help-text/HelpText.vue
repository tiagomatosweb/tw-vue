<template>
    <small :class="rootClass">
        <template v-if="text">{{ text }}</template>
        <template v-else-if="$slots.default">
            <slot />
        </template>
    </small>
</template>

<script>
import FixedMixin from '../../utils/FixedMixin';
import VariantMixin from '../../utils/VariantMixin';

export default {
    name: 'TWHelpText',
    mixins: [FixedMixin, VariantMixin],
    props: {
        text: String,
    },
    data() {
        return {
            config: this.$TWVue.HelpText,
        };
    },
    computed: {
        rootClass() {
            return [
                'relative',
                this.fixedClass.root,
                this.variantClass.root,
            ];
        },
    },
};
</script>
