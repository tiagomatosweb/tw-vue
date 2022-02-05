<template>
    <button
        type="button"
        :class="rootClass"
        @click="onClick"
    >
        <span :class="handlerClass" />
    </button>
</template>

<script>
import FixedMixin from '../../utils/FixedMixin';
import VariantMixin from '../../utils/VariantMixin';
import SizeMixin from '../../utils/SizeMixin';

export default {
    name: 'TWFormSwitch',
    mixins: [FixedMixin, VariantMixin, SizeMixin],
    props: {
        value: [Boolean, Number],
    },
    data() {
        return {
            config: this.$TWVue.FormSwitch,
            localValue: this.value,
        };
    },
    computed: {
        rootClass() {
            return [
                this.fixedClass.root,
                this.isEnabled ? this.variantClass.root.enabled : this.variantClass.root.disabled,
                this.sizeClass.root,
            ];
        },
        handlerClass() {
            return [
                this.fixedClass.handler,
                this.isEnabled ? 'translate-x-full' : 'translate-x-0',
                this.isEnabled ? this.variantClass.handler.enabled : this.variantClass.handler.disabled,
                this.sizeClass.handler,
            ];
        },
        isEnabled() {
            return !!this.localValue;
        },
    },
    watch: {
        value(newValue) {
            this.localValue = newValue;
        },
    },
    methods: {
        onClick() {
            this.localValue = !this.localValue;
            this.$emit('input', this.localValue);
        },
    },
};
</script>
