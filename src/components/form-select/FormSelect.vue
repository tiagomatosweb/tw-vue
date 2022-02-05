<template>
    <select
        v-model="computedValue"
        v-bind="$attrs"
        :class="rootClass"
        @blur="$emit('blur', $event)"
        @focus="$emit('focus', $event)"
    >
        <template v-if="placeholder">
            <option
                :value="null"
                :disabled="$attrs.multiple"
            >{{ placeholder }}</option>
        </template>

        <Component
            v-for="(option, index) in formOptions"
            :is="getOptionComponent(option)"
            :key="`option_${index}`"
            v-bind="getOptionAttributes(option)"
        >{{ option.text }}
        </Component>
    </select>
</template>

<script>
import FixedMixin from '../../utils/FixedMixin';
import VariantMixin from '../../utils/VariantMixin';
import SizeMixin from '../../utils/SizeMixin';
import FormSelectOption from './FormSelectOption';
import FormSelectOptionGroup from './FormSelectOptionGroup';

export default {
    name: 'TWFormSelect',
    mixins: [FixedMixin, VariantMixin, SizeMixin],
    components: {
        FormSelectOption,
        FormSelectOptionGroup,
    },
    props: {
        value: {
            type: [String, Number, Boolean, Object, Array, Function, Date],
            default: null,
        },
        placeholder: String,
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
            config: this.$TWVue.FormInput,
        };
    },
    watch: {
        value(value) {
            this.localValue = value;
        },
    },
    computed: {
        computedValue: {
            get() {
                return this.localValue
            },
            set(value) {
                this.localValue = value
                this.$emit('input', value)
            }
        },
        rootClass() {
            return [
                this.fixedClass.root,
                this.variantClass.root,
                this.sizeClass,
            ];
        },
        formOptions() {
            return this.normalizeOptions(this.options);
        },
    },
    methods: {
        getOptionAttributes(option) {
            const { options } = option;
            if (Array.isArray(options) && options.length) {
                return {
                    label: option.text,
                    options: option.options
                };
            } else {
                return {
                    value: option.value,
                };
            }
        },
        getOptionComponent(option) {
            const { options } = option;
            return Array.isArray(options) ? 'FormSelectOptionGroup' : 'FormSelectOption';
        },
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
    },
};
</script>
