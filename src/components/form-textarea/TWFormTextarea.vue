<template>
    <textarea
        :autofocus="autofocus"
        :class="classList"
        :disabled="disabled"
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :readonly="readonly"
        :required="required"
        :value="value"
        :rows="rows"
        :maxlength="maxLength"
        :cols="cols"
        :wrap="wrap"
        v-on="inputListeners"
    />
</template>

<script>
    export default {
        name: 'TWFormTextarea',

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
            placeholder: {
                type: String,
                default: undefined,
            },
            name: {
                type: String,
                default: undefined,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            readonly: {
                type: Boolean,
                default: false,
            },
            required: {
                type: Boolean,
                default: false,
            },
            autofocus: {
                type: Boolean,
                default: false,
            },
            size: {
                type: String,
                default: 'md',
            },
            cols: {
                type: [Number, String],
                default: undefined,
            },
            rows: {
                type: [Number, String],
                default: 2,
            },
            maxLength: {
                type: [Number, String],
                default: undefined,
            },
            wrap: {
                type: String,
                default: 'soft',
            },
        },

        data() {
            return {
                localValue: this.value,
                TWOptions: {},
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
                    this.TWOptions.base,
                    this.getVariants,
                    this.getSizes,
                ];
            },

            getVariants() {
                if (this.disabled) {
                    return this.TWOptions.disabled;
                }

                if (this.readonly) {
                    return this.TWOptions.readonly;
                }

                const variants = this.TWOptions.variants;
                return variants[this.variant];
            },

            getSizes() {
                const sizes = this.TWOptions.sizes;
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
            this.TWOptions = this?.$TWVue?.TWFormInput || {};
        },
    };
</script>
