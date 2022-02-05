<template>
    <label
        :class="rootClass"
        v-bind="$attrs"
    >
        <template v-if="label">{{ label }}</template>
        <template v-else-if="$slots.default">
            <slot />
        </template>
    </label>
</template>

<script>
import FixedMixin from '../../utils/FixedMixin';
import VariantMixin from '../../utils/VariantMixin';

export default {
    name: 'TWFormLabel',
    inheritAttrs: false,
    mixins: [FixedMixin, VariantMixin],
    props: {
        label: String,
    },
    data() {
        return {
            config: this.$TWVue.FormLabel,
        };
    },
    computed: {
        rootClass() {
            return [
                this.fixedClass.root,
            ];
        },
    },
};
</script>
