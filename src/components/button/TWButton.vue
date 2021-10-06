<script>
    import TWSpinner from '../spinner/TWSpinner';

    export default {
        name: 'TWButton',

        props: {
            type: {
                type: String,
                default: 'button',
            },
            variant: {
                type: String,
                default: 'default',
            },
            spinnerVariant: {
                type: String,
                default: 'white',
            },
            size: {
                type: String,
                default: 'md',
            },
            block: {
                type: Boolean,
                default: false,
            },
            busy: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            href: {
                type: String,
                default: undefined,
            },
            to: {
                type: [String, Object],
                default: undefined,
            },
            tagName: {
                type: String,
                default: 'button',
                validator(value) {
                    return ['button', 'a'].includes(value);
                },
            },
        },

        data() {
            return {
                TWOptions: {},
            };
        },

        computed: {
            baseClass() {
                const base = [
                    this.TWOptions.base,
                ];

                if (this.block) {
                    base.push('w-full justify-center');
                }

                if (this.busy) {
                    base.push('opacity-75');
                }

                return [
                    base.join(' '),
                    this.getVariant,
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

            isRouterLinkComponentAvailable() {
                return !!(this.$options.components && (this.$options.components.RouterLink || this.$options.components.NuxtLink));
            },

            isARouterLink() {
                return this.to !== undefined && this.isRouterLinkComponentAvailable;
            },

            toRender() {
                if (this.isARouterLink && this.$options.components) {
                    return this.$options.components.NuxtLink || this.$options.components.RouterLink;
                }

                if (this.href) {
                    return 'a';
                }

                return this.tagName;
            },
        },

        created() {
            this.TWOptions = this?.$TWVue?.TWButton || {};
        },

        methods: {
            routerLinkAttributes() {
                return {
                    to: this.to,
                    tag: this.tagName,
                };
            },

            getAttributes() {
                if (this.isARouterLink) {
                    return this.routerLinkAttributes();
                }

                return {
                    type: this.type,
                };
            },
        },

        render(createElement) {
            let options;

            if (this.busy) {
                options = createElement(TWSpinner, {
                    props: {
                        variant: this.spinnerVariant,
                        size: 'xxs',
                    },
                    class: {
                        '-ml-1 mr-3 h-full w-5': !!this.$slots.default,
                    },
                });
            }

            return createElement(this.toRender, {
                class: this.baseClass,
                attrs: this.getAttributes(),
                on: this.$listeners,
            }, [
                options,
                this.$slots.default,
            ]);
        },
    };
</script>
