<template>
    <div class="relative">
        <select
            :autofocus="autofocus"
            :class="classList"
            :disabled="disabled"
            :id="id"
            :multiple="multiple"
            :name="name"
            :readonly="readonly"
            :required="required"
            v-model="localValue"
            @change="onChange"
        >
            <slot name="first" />

            <FormSelectOption
                v-for="(option, index) in options"
                :key="`option_${index}`"
                :value="option[valueField]"
            >
                {{ option[textField] }}
            </FormSelectOption>
        </select>
    </div>
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
                type: [String, Number, Object],
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
