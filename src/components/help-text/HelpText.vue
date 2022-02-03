<template>
    <small :class="baseClass">
        <slot />
    </small>
</template>

<script>
import VariantMixin from '../../utils/VariantMixin';

export default {
    name: 'TWHelpText',
    mixins: [VariantMixin],
    data() {
        return {
            config: this.$TWVue.HelpText,
        };
    },
    computed: {
        baseClass() {
            return [
                'relative',
                this.config.base,
                this.getVariant.base,
            ];
        },
    },
};
</script>
