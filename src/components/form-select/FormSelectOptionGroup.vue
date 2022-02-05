<template>
    <optgroup :label="label">
        <FormSelectOption
            v-for="(option, index) in options"
            :key="`option_${index}`"
            :value="option.value"
        >{{ option.text }}
        </FormSelectOption>
    </optgroup>
</template>
<script>
import FormSelectOption from './FormSelectOption';

export default {
    name: 'TWFormSelectOptionGroup',
    props: {
        label: String,
        options: {
            type: Array,
            default: () => [],
        },
    },
    components: {
        FormSelectOption,
    },
};
</script>
