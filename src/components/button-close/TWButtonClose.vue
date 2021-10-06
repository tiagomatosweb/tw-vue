<script>
    export default {
        name: 'TWButtonClose',

        props: {
            variant: {
                type: String,
                default: 'default',
            },
            size: {
                type: String,
                default: 'md',
            },
        },

        data() {
            return {
                TWOptions: {},
            };
        },

        computed: {
            baseClass() {
                return [
                    this.TWOptions.base,
                    this.getVariant,
                ];
            },

            iconClass() {
                return [
                    this.getSize,
                ];
            },

            getVariant() {
                const variants = this.TWOptions.variants;
                return variants[this.variant];
            },

            getSize() {
                const sizes = this.TWOptions.sizes;
                return sizes[this.size];
            },
        },

        created() {
            this.TWOptions = this?.$TWVue?.TWButtonClose || {};
        },

        render(createElement) {
            let child = this.$slots.default;
            if (!child) {
                child = createElement('svg', {
                    attrs: {
                        class: this.iconClass,
                        xmlns: 'http://www.w3.org/2000/svg',
                        viewBox: '0 0 20 20',
                        fill: 'currentColor',
                        'aria-hidden': 'true',
                    },
                    slot: 'default',
                }, [
                    createElement('path', {
                        attrs: {
                            'fill-rule': 'evenodd',
                            d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
                            'clip-rule': 'evenodd',
                        },
                    }),
                ]);
            }

            return createElement('button', {
                class: this.baseClass,
                attrs: {
                    type: 'button',
                },
                on: this.$listeners,
            }, [child]);
        },
    };
</script>
