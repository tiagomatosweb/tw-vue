<script>
    export default {
        name: 'TWDropdownItem',

        inject: {
            'TWDropdown': {
                default: undefined,
            },
        },

        props: {
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
            rootClass() {
                return [
                    'group flex items-center',
                    'block w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:text-gray-900 hover:bg-gray-100',
                    'focus:outline-none focus:bg-gray-100 focus:text-gray-900',
                ];
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
                };
            },

            getAttributes() {
                if (this.isARouterLink) {
                    return this.routerLinkAttributes();
                }

                return {
                    href: this.href,
                };
            },

            onClick($evt) {
                this.closeDropdown();
                this.$emit('click', $evt);
            },

            closeDropdown() {
                if (!this.TWDropdown) {
                    return;
                }

                this.TWDropdown.close();
            },
        },

        render(createElement) {
            return createElement(this.toRender, {
                class: this.rootClass,
                attrs: this.getAttributes(),
                on: {
                    ...this.$listeners,
                    click: this.onClick,
                },
            }, this.$slots.default);
        },
    };
</script>
