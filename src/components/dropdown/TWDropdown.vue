<template>
    <div
        ref="component"
        class="inline-block text-left"
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
            v-show="isOpen"
            class="w-56 rounded-md shadow-lg"
        >
            <div class="py-1 rounded-md bg-white shadow-xs">
                <slot />
            </div>
        </div>
        <!--        <Transition-->
        <!--            enter-active-class="transition ease-out duration-100"-->
        <!--            enter-class="transform opacity-0 scale-95"-->
        <!--            enter-to-class="transform opacity-100 scale-100"-->
        <!--            leave-active-class="transition ease-in duration-75"-->
        <!--            leave-class="transform opacity-100 scale-100"-->
        <!--            leave-to-class="transform opacity-0 scale-95"-->
        <!--        >-->
        <!--        </Transition>-->
    </div>
</template>

<script>
    import TWButton from '../button/TWButton';
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
                default: 'bottom-start',
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
            if (typeof document !== 'undefined') {
                document.addEventListener('click', this.clickOutListener);
            }

            this.initPopper();
        },

        beforeDestroy() {
            if (typeof document !== 'undefined') {
                document.removeEventListener('click', this.clickOutListener);
            }
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
                this.$emit('open');
                this.isOpen = true;
            },

            close() {
                this.$emit('close');
                this.isOpen = false;
            },

            select(opt) {
                this.close();
                this.$emit('select', opt);
            },

            initPopper() {
                const button = this.$refs.component;
                const tooltip = this.$refs.dropdown;

                this.$nextTick(() => {
                    createPopper(button, tooltip, {
                        placement: this.placement,
                    });
                });
            },
        },
    };
</script>
