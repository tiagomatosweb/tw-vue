<template>
    <button
        type="button"
        :class="baseClass"
        @click="onClick"
    >
        <span :class="handlerClass" />
    </button>
</template>

<script>
import VariantMixin from '../../utils/VariantMixin';
import SizeMixin from '../../utils/SizeMixin';

export default {
    name: 'TWFormSwitch',
    mixins: [VariantMixin, SizeMixin],
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
        baseClass() {
            return [
                this.config.base,
                this.isEnabled ? this.getVariant.base.enabled : this.getVariant.base.disabled,
                this.getSize.base,
            ];
        },
        handlerClass() {
            return [
                this.config.baseHandler,
                this.isEnabled ? 'translate-x-full' : 'translate-x-0',
                this.isEnabled ? this.getVariant.handler.enabled : this.getVariant.handler.disabled,
                this.getSize.handler,
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
