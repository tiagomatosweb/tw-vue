<script>
    export default {
        name: 'TWFormSelectOption',

        props: {
            value: undefined,
            disabled: {
                type: Boolean,
                default: false,
            },
        },

        render(createElement) {
            return createElement('option', {
                attrs: {
                    value: this.value,
                    disabled: this.disabled,
                },
            }, this.$slots.default);
        },
    };
</script>
