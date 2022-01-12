<script>
    import TWFormSelectOption from './TWFormSelectOption';

    export default {
        name: 'TWFormSelectOptionGroup',

        props: {
            label: {
                type: String,
                default: '',
            },
            options: {
                type: Array,
                default: () => [],
            },
        },

        render(createElement) {
            const options =  this.options.map((option, index) => {
                const { value, text, selected } = option;
                const key = `option_${index}`;

                return createElement(TWFormSelectOption, { props: { value, selected }, key }, text);
            });

            return createElement('optgroup', {
                attrs: {
                    label: this.label,
                },
            }, [
                this.$slots.first,
                options,
            ]);
        },
    };
</script>
