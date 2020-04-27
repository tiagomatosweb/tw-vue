<template>
    <div class="relative inline-block text-left">
        <button
            type="button"
            :class="buttonClassList"
            @click.stop.prevent="isOpen = !isOpen"
        >
            <slot name="buttonText" />

            <slot
                v-if="$slots.default && !clean"
                name="buttonArrow"
            >
                <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </slot>
        </button>

        <Transition
            enter-active-class="transition ease-out duration-100"
            enter-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <div
                v-show="isOpen"
                class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg z-200"
            >
                <div class="py-1 rounded-md bg-white shadow-xs">
                    <slot />
                </div>
            </div>
        </Transition>
    </div>
</template>

<script>
    export default {
        name: 'TwDropdown',

        props: {
            clean: {
                type: Boolean,
                default: false,
            },

            btnExtraClasses: {
                type: String,
                default: '',
            },

            rounded: {
                type: [String, Boolean],
                default: undefined,
                validator: value => ['', 'sm', 'md', 'lg', 'full'].includes(value),
            },
        },

        data() {
            return {
                isOpen: false,
            };
        },

        computed: {
            buttonClassList() {
                return [
                    'inline-flex justify-center w-full text-sm leading-5 font-medium focus:shadow-outline-blue active:bg-gray-50 active:text-cool-gray-700 transition ease-in-out duration-150',
                    this.getPaddingClass,
                    this.getBackgroundClass,
                    this.getBtnExtraClasses,
                    this.getBorderRoundedClass,
                    this.getBorderClass,
                    this.getTextColorClass,
                    this.getShadowClass,
                ];
            },

            getShadowClass() {
                return !this.clean ? 'shadow-sm' : '';
            },

            getBorderClass() {
                return !this.clean ? 'border border-cool-gray-300 focus:border-blue-300 focus:outline-none' : '';
            },

            getBorderRoundedClass() {
                if (this.clear) {
                    return '';
                }

                if (this.rounded === '') {
                    return 'rounded';
                }
                return this.rounded ? `rounded-${this.rounded}` : '';
            },

            getPaddingClass() {
                return this.$slots.buttonText && !this.clean ? 'px-4 py-2' : '';
            },

            getBackgroundClass() {
                return !this.clean ? 'bg-white' : '';
            },

            getTextColorClass() {
                return !this.clean ? 'text-cool-gray-700 hover:text-cool-gray-500' : 'text-cool-gray-400';
            },

            getBtnExtraClasses() {
                return this.btnExtraClasses;
            },
        },

        watch: {
            isOpen(value) {
                if (value) {
                    this.$root.$emit('tw::dropdown::shown', this);
                }
            },
        },

        created() {
            this.$root.$on('tw::dropdown::shown', this.rootCloseListener);
        },

        mounted() {
            if (typeof document !== 'undefined') {
                document.addEventListener('click', this.clickOutListener);
            }
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

            close() {
                this.isOpen = false;
            },
        },
    };
</script>
