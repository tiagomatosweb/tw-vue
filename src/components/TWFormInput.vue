<template>
    <div class="relative">
        <input
            :id="id"
            :class="classList"
            :type="type"
            :name="name"
            :value="value"
            :placeholder="placeholder"
            v-on="inputListeners"
        >
    </div>
</template>

<script>
    export default {
        name: 'TWFormInput',

        props: {
            value: {
                type: [String, Number],
                default: undefined,
            },
            variant: {
                type: String,
                default: 'default',
            },
            id: {
                type: String,
                default: undefined,
            },
            type: {
                type: String,
                default: 'text',
            },
            autocomplete: {
                type: String,
                default: undefined,
            },
            placeholder: {
                type: String,
                default: undefined,
            },
            name: {
                type: String,
                default: undefined,
            },
            max: {
                type: [String, Number],
                default: undefined,
            },
            min: {
                type: [String, Number],
                default: undefined,
            },
            size: {
                type: String,
                default: 'md',
            },
        },

        data() {
            return {
                localValue: this.value,
                localBase: '',
                localVariants: {},
                localSizes: {},
            };
        },

        watch: {
            value(value) {
                this.localValue = value;
            },
        },

        computed: {
            classList() {
                return [
                    this.localBase,
                    this.getVariants,
                    this.getSizes,
                ];
            },

            getVariants() {
                const variants = { ...this.localVariants };
                return variants[this.variant];
            },

            getSizes() {
                const sizes = { ...this.localSizes };
                return sizes[this.size];
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

        created() {
            this.localBase = this?.$TWVue?.TWFormInput?.base || '';
            this.localVariants = this?.$TWVue?.TWFormInput?.variants || {};
            this.localSizes = this?.$TWVue?.TWFormInput?.sizes || {};
        },
    };
</script>
