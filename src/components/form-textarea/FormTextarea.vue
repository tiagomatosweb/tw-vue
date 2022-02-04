<template>
    <textarea
        v-bind="$attrs"
        :value="value"
        :class="baseClass"
        v-on="inputListeners"
    />
</template>

<script>
import VariantMixin from '../../utils/VariantMixin';
import SizeMixin from '../../utils/SizeMixin';

export default {
    name: 'TWFormTextarea',
    mixins: [VariantMixin, SizeMixin],
    inheritAttrs: false,
    props: {
        value: [String, Number],
    },
    data() {
        return {
            localValue: this.value,
            config: this.$TWVue.FormTextarea,
        };
    },
    watch: {
        value(value) {
            this.localValue = value;
        },
    },
    computed: {
        baseClass() {
            return [
                this.config.base,
                this.getVariant.base,
                this.getSize,
            ];
        },
        inputListeners() {
            const vm = this;
            return {
                ...this.$listeners,
                input(event) {
                    vm.$emit('input', event.target.value);
                },
                change(event) {
                    vm.$emit('change', event.target.value);
                },
                blur(event) {
                    vm.$emit('blur', event);
                },
            };
        },
    },
};
</script>
