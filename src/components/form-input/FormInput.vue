<template>
    <Component
        :is="computedTag"
        v-bind="$attrs"
        :value="value"
        :class="rootClass"
        v-on="inputListeners"
    />
</template>

<script>
import FixedMixin from '../../utils/FixedMixin';
import VariantMixin from '../../utils/VariantMixin';
import SizeMixin from '../../utils/SizeMixin';

export default {
    name: 'TWFormInput',
    mixins: [FixedMixin, VariantMixin, SizeMixin],
    inheritAttrs: false,
    props: {
        value: [String, Number],
    },
    data() {
        return {
            localValue: this.value,
            config: this.$TWVue.FormInput,
        };
    },
    watch: {
        value(value) {
            this.localValue = value;
        },
    },
    computed: {
        rootClass() {
            return [
                this.fixedClass.root,
                this.variantClass.root,
                this.sizeClass,
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
        computedTag() {
            return this.$attrs.type && this.$attrs.type === 'textarea' ? 'textarea' : 'input';
        },
    },
};
</script>
