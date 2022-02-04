<template>
    <small :class="baseClass">
        <template v-if="text">{{ text }}</template>
        <template v-else-if="$slots.default">
            <slot />
        </template>
    </small>
</template>

<script>
import VariantMixin from '../../utils/VariantMixin';

export default {
    name: 'TWHelpText',
    mixins: [VariantMixin],
    props: {
        text: String,
    },
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
