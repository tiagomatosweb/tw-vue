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
    export default {
        name: 'TWToggle',

        props: {
            value: {
                type: Boolean,
                default: false,
            },
            variant: {
                type: String,
                default: 'default',
            },
        },

        data() {
            return {
                localValue: this.value,
            };
        },

        computed: {
            config() {
                return this?.$TWVue?.TWToggle || {};
            },

            baseClass() {
                const isEnabled = this.isEnabled;
                const variant = this.getVariant;

                return [
                    this.config.base,
                    isEnabled ? variant.enabled : variant.disabled,
                ];
            },

            handlerClass() {
                const isEnabled = this.isEnabled;

                return [
                    this.config.handlerBase,
                    isEnabled ? 'translate-x-5' : 'translate-x-0',
                ];
            },

            isEnabled() {
                return this.localValue;
            },

            getVariant() {
                return this.config.variants[this.variant];
            },

            inputListeners() {
                return this.$listeners;
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
