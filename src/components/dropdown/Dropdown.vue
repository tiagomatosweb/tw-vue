<template>
    <div
        ref="component"
        class="relative inline-block text-left"
    >
        <TWButton
            ref="button"
            type="button"
            :variant="variant"
            :size="size"
            @click.stop.prevent="toggleDropdown()"
        >
            <slot name="button-content">
                {{ text }}
            </slot>

            <slot
                v-if="!noCaret"
                name="button-icon"
            >
                <svg
                    :class="iconClassList"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </slot>
        </TWButton>

        <div
            ref="dropdown"
            :data-show="isOpen"
            class="absolute dropdown w-56 rounded-md shadow-lg z-10"
        >
            <div class="py-1 rounded-md bg-white shadow-xs">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
    import TWButton from '../button/Button';
    import { createPopper } from '@popperjs/core/lib/popper-lite.js';

    export default {
        name: 'TWDropdown',

        props: {
            variant: {
                type: String,
                default: 'default',
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            noCaret: {
                type: Boolean,
                default: false,
            },
            size: {
                type: String,
                default: 'md',
            },
            text: {
                type: String,
                default: undefined,
            },
            placement: {
                type: String,
                default: 'bottom-end',
            },
        },

        components: {
            TWButton,
        },

        provide() {
            return {
                TWDropdown: this,
            };
        },

        data() {
            return {
                TWOptions: {},
                isOpen: false,
                popper: null,
                id: this._uid,
            };
        },

        computed: {
            iconClassList() {
                const sizes = this.TWOptions.icon.sizes;
                return sizes[this.size];
            },
        },

        watch: {
            isOpen(value) {
                if (value) {
                    this.$root.$emit('tw-dropdown-shown', this);
                }
            },
        },

        created() {
            this.$root.$on('tw-dropdown-shown', this.rootCloseListener);
            this.TWOptions = this?.$TWVue?.TWDropdown || {};
        },

        mounted() {
            this.initPopper();

            if (typeof document !== 'undefined') {
                document.addEventListener('click', this.clickOutListener);
            }
        },

        beforeDestroy() {
            this.close();

            if (typeof document !== 'undefined') {
                document.removeEventListener('click', this.clickOutListener);
            }
        },

        destroyed() {
            this.popper.destroy();
        },

        methods: {
            rootCloseListener(vm) {
                if (vm !== this) {
                    this.close();
                }
            },

            clickOutListener(e) {
                // TODO Refactor as it should close only the current scope
                if (!this.$el.contains(e.target)) {
                    this.close();
                }
            },

            toggleDropdown() {
                if (this.isOpen) {
                    this.close();
                } else {
                    this.open();
                }
            },

            open() {
                this.isOpen = true;
                this.$emit('open');
            },

            close() {
                this.isOpen = false;
                this.$emit('close');
            },

            select(opt) {
                this.close();
                this.$emit('select', opt);
            },

            initPopper() {
                const button = this.$refs.component;
                const dropdown = this.$refs.dropdown;

                this.popper = createPopper(button, dropdown, {
                    placement: this.placement,
                });
            },
        },
    };
</script>

<style>
    .dropdown {
        pointer-events: none;
        visibility: hidden;
    }

    .dropdown[data-show] {
        pointer-events: auto;
        visibility: visible;
    }
</style>
