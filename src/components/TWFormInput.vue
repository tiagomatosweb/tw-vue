<template>
    <div class="relative">
        <input
            :autocomplete="autocomplete"
            :autofocus="autofocus"
            :class="classList"
            :disabled="disabled"
            :id="id"
            :max="max"
            :maxlength="maxlength"
            :min="min"
            :minlength="minlength"
            :name="name"
            :pattern="pattern"
            :placeholder="placeholder"
            :readonly="readonly"
            :required="required"
            :type="type"
            :value="value"
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
            maxlength: {
                type: [String, Number],
                default: undefined,
            },
            min: {
                type: [String, Number],
                default: undefined,
            },
            minlength: {
                type: [String, Number],
                default: undefined,
            },
            disabled: {
                type: Boolean,
                default: undefined,
            },
            readonly: {
                type: Boolean,
                default: undefined,
            },
            required: {
                type: Boolean,
                default: undefined,
            },
            pattern: {
                type: Boolean,
                default: undefined,
            },
            autofocus: {
                type: Boolean,
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
                options: {},
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
                    this.options.base,
                    this.getVariants,
                    this.getSizes,
                ];
            },

            getVariants() {
                if (this.disabled) {
                    return this.options.disabled;
                }

                if (this.readonly) {
                    return this.options.readonly;
                }

                const variants = this.options.variants;
                return variants[this.variant];
            },

            getSizes() {
                const sizes = this.options.sizes;
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
            this.options = this?.$TWVue?.TWFormInput || {};
        },
    };
</script>
