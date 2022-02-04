<template>
    <label
        :class="baseClass"
        v-bind="$attrs"
    >
        <template v-if="label">{{ label }}</template>
        <template v-else-if="$slots.default">
            <slot />
        </template>
    </label>
</template>

<script>
    import VariantMixin from '../../utils/VariantMixin';

    export default {
        name: 'TWFormLabel',
        inheritAttrs: false,
        mixins: [VariantMixin],
        props: {
            label: String,
        },
        data() {
            return {
                config: this.$TWVue.FormLabel,
            };
        },
        computed: {
            baseClass() {
                return [
                    this.config.base,
                ];
            },
        },
    };
</script>
