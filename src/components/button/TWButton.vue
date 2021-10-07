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
            size: {
                type: String,
                default: 'md',
            },
            rounded: {
                type: [String, Boolean],
                default: 'default',
            },
            circle: {
                type: Boolean,
                default: false,
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

        computed: {
            config() {
                return this?.$TWVue?.TWButton || {};
            },

            baseClass() {
                const base = [
                    this.config.base,
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
                    this.getRoundBorder,
                ];
            },

            getVariant() {
                const variants = this.config.variants;
                return variants[this.variant];
            },

            getSize() {
                if (this.circle) {
                    return;
                }

                const sizes = this.config.sizes;
                return sizes[this.size];
            },

            getRoundBorder() {
                if (this.circle) {
                    return 'rounded-full';
                }

                if (!this.rounded) {
                    return '';
                }

                const rounded = this.config.rounded;
                return rounded[this.rounded];
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

        methods: {
            routerLinkAttributes() {
                return {
                    to: this.to,
                    tag: this.tagName,
                    disabled: this.busy,
                };
            },

            getAttributes() {
                if (this.isARouterLink) {
                    return this.routerLinkAttributes();
                }

                return {
                    type: this.type,
                    disabled: this.busy,
                };
            },

            onClick(evt) {
                if (this.busy) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    return;
                }

                this.$emit('click', evt);
            },
        },

        render(createElement) {
            let options;

            if (this.busy) {
                options = createElement(TWSpinner, {
                    props: {
                        size: 'xxs',
                    },
                    class: {
                        '-ml-1 mr-3 h-full w-5': !!this.$slots.default,
                    },
                });
            }

            return createElement(this.toRender, {
                class: this.baseClass,
                style: {
                    width: this.circle && this.config?.circle[this.size] ? `${this.config.circle[this.size]}px` : undefined,
                    height: this.circle && this.config?.circle[this.size] ? `${this.config.circle[this.size]}px` : undefined,
                },
                attrs: this.getAttributes(),
                on: {
                    ...this.$listeners,
                    click: this.onClick,
                },
            }, [
                options,
                this.$slots.default,
            ]);
        },
    };
</script>
