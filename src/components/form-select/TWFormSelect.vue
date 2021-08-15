<template>
    <select
        :autofocus="autofocus"
        :class="classList"
        :disabled="disabled"
        :id="id"
        :multiple="multiple"
        :name="name"
        :readonly="readonly"
        :required="required"
        @change="onChange"
    >
        <slot name="first" />

        <FormSelectOption
            v-for="(option, index) in standardOptions"
            :key="`option_${index}`"
            :value="option.value"
            :selected="option.selected"
        >
            {{ option.text }}
        </FormSelectOption>
    </select>
</template>

<script>
    import FormSelectOption from './TWFormSelectOption';

    export default {
        name: 'TWFormSelect',

        components: {
            FormSelectOption,
        },

        props: {
            value: {
                type: [String, Number, Object, Boolean],
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
            name: {
                type: String,
                default: undefined,
            },
            multiple: {
                type: Boolean,
                default: false,
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
            options: {
                type: Array,
                default: () => [],
            },
            textField: {
                type: String,
                default: 'text',
            },
            valueField: {
                type: String,
                default: 'value',
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
                    this.getSize,
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

            getSize() {
                const sizes = this.TWOptions.sizes;
                return sizes[this.size];
            },

            standardOptions() {
                const options = this.options;
                let output = null;

                if (Array.isArray(options)) {
                    output = options.map((opt) => {
                        let value = opt;
                        let text = opt;
                        let selected = opt === this.localValue;

                        if (typeof opt === 'object') {
                            value = opt[this.valueField];
                            text = opt[this.textField];
                            selected = opt[this.valueField] === this.localValue;
                        }

                        return { value, text, selected };
                    });
                }

                return output;
            },
        },

        created() {
            this.TWOptions = this?.$TWVue?.TWFormSelect || {};
        },

        methods: {
            onChange(evt) {
                const { target } = evt;
                const selectedValue = Array.from(target.options)
                    .filter(o => o.selected)
                    .map(o => ('_value' in o ? o._value : o.value));

                this.localValue = this.multiple ? selectedValue : selectedValue[0];

                this.$emit('input', this.localValue);
                this.$emit('change', this.localValue);
            },
        },
    };
</script>
