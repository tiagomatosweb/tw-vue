<script>
    import TWFormSelectOption from './TWFormSelectOption';
    import TWFormSelectOptionGroup from './TWFormSelectOptionGroup';

    export default {
        name: 'TWFormSelect',

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
            optionsField: {
                type: String,
                default: 'options',
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
            baseClass() {
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

            formOptions() {
                return this.normalizeOptions(this.options);
            },
        },

        created() {
            this.TWOptions = this?.$TWVue?.TWFormSelect || {};
        },

        methods: {
            normalizeOptions(options) {
                let output = null;

                if (Array.isArray(options)) {
                    output = options.map((opt) => {
                        let value = opt;
                        let text = opt;

                        if (typeof opt === 'object') {
                            let options = opt[this.optionsField];
                            if (Array.isArray(options) && options.length) {
                                options = options.map((option) => this.normalizeOption(option));

                                return { ...this.normalizeOption(opt), options };
                            }

                            return this.normalizeOption(opt);
                        }

                        return { value, text };

                    });
                }

                return output;
            },

            normalizeOption(option) {
                return {
                    value: option[this.valueField],
                    text: option[this.textField],
                };
            },

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

        render(createElement) {
            const self = this;

            const select = {
                class: this.baseClass,
                attrs: {
                    autofocus: this.autofocus,
                    disabled: this.disabled,
                    id: this.id,
                    multiple: this.multiple,
                    name: this.name,
                    readonly: this.readonly,
                    required: this.required,
                },
                domProps: {
                    value: self.value,
                },
                on: {
                    change: this.onChange,
                },
            };

            const options =  this.formOptions.map((option, index) => {
                const { value, text, options } = option;
                const key = `option_${index}`;

                return Array.isArray(options)
                    ? createElement(TWFormSelectOptionGroup, { props: { label: text, options }, key }, text)
                    : createElement(TWFormSelectOption, { props: { value }, key }, text);
            });

            return createElement('select', select, [
                this.$slots.first,
                options,
            ]);
        },
    };
</script>
