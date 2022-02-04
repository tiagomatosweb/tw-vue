<template>
    <optgroup :label="label">
        <FormSelectOption
            v-for="(option, index) in options"
            :key="`option_${index}`"
            :value="option.value"
        >{{ option.text }}</FormSelectOption>
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

        // render(createElement) {
        //     const options =  this.options.map((option, index) => {
        //         const { value, text, selected } = option;
        //         const key = `option_${index}`;
        //
        //         return createElement(TWFormSelectOption, { props: { value, selected }, key }, text);
        //     });
        //
        //     return createElement('optgroup', {
        //         attrs: {
        //             label: this.label,
        //         },
        //     }, [
        //         this.$slots.first,
        //         options,
        //     ]);
        // },
    };
</script>
