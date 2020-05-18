<template>
    <div class="relative inline-block text-left">
        <button
            type="button"
            :class="buttonClassList"
            @click.stop.prevent="toggleDropdown()"
        >
            <slot name="button-content">
                {{ text }}
            </slot>

            <slot
                v-if="!noIcon"
                name="button-icon"
            >
                <svg
                    :class="iconClassList"
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
                class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg z-50"
                :style="{ width: `${menuWidth}px` }"
            >
                <div class="py-1 rounded-md bg-white shadow-xs">
                    <slot>
                        <ul>
                            <li
                                v-for="(opt, index) in options"
                                :key="`option_${index}`"
                                class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 cursor-pointer"
                                @click="select(opt)"
                            >
                                {{ label ? opt[label] : opt }}
                            </li>
                        </ul>
                    </slot>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script>
    export default {
        name: 'TwDropdown',

        props: {
            naked: {
                type: Boolean,
                default: false,
            },

            noPadding: {
                type: Boolean,
                default: false,
            },

            noIcon: {
                type: Boolean,
                default: false,
            },

            btnClass: {
                type: String,
                default: '',
            },

            iconClass: {
                type: String,
                default: '',
            },

            size: {
                type: String,
                default: 'md',
                validator: value => ['sm', 'md'].includes(value),
            },

            rounded: {
                type: [String, Boolean],
                default: undefined,
                validator: value => ['', 'sm', 'md', 'lg', 'full'].includes(value),
            },

            text: {
                type: String,
                default: '',
            },

            options: {
                type: Array,
                default: () => [],
            },

            label: {
                type: String,
                default: undefined,
            },

            labelKey: {
                type: String,
                default: undefined,
            },

            menuWidth: {
                type: [String, Number],
                default: undefined,
            },
        },

        data() {
            return {
                isOpen: false,
                id: this._uid,
            };
        },

        computed: {
            buttonClassList() {
                return [
                    'flex items-center justify-center leading-5 transition ease-in-out duration-150 z-50',
                    this.getTextSizeClass,
                    this.getTextColorClass,
                    this.getPaddingClass,
                    this.getBgClass,
                    this.getBtnExtraClasses,
                    this.getBorderRoundedClass,
                    this.getBorderClass,
                    this.getShadowClass,
                ];
            },

            getTextSizeClass() {
                const sizes = {
                    sm: 'text-xs font-medium',
                    md: 'text-sm font-medium',
                };

                return sizes[this.size];
            },

            getTextColorClass() {
                return !this.naked ? 'text-cool-gray-700 hover:text-cool-gray-500 active:text-cool-gray-700' : 'text-cool-gray-700';
            },

            getShadowClass() {
                return !this.naked ? 'shadow-sm' : '';
            },

            getBorderClass() {
                return !this.naked ? 'border border-cool-gray-300 focus:border-blue-300 focus:outline-none focus:shadow-outline-blue' : 'focus:outline-none';
            },

            getBorderRoundedClass() {
                if (this.naked) { return ''; }

                if (this.rounded === '') { return 'rounded'; }

                return this.rounded ? `rounded-${this.rounded}` : '';
            },

            getPaddingClass() {
                if (this.noPadding) { return ''; }

                const sizes = {
                    sm: 'px-2 py-1',
                    md: 'px-4 py-2',
                };

                return sizes[this.size];
            },

            getBgClass() {
                return !this.naked ? 'bg-white active:bg-gray-50' : '';
            },

            getBtnExtraClasses() {
                return this.btnClass;
            },

            iconClassList() {
                if (this.iconClass) {
                    return this.iconClass;
                }

                return [
                    this.getIconDimensionClass,
                    this.getIconMarginClass,
                ];
            },

            getIconDimensionClass() {
                const sizes = {
                    sm: 'h-3 w-4',
                    md: 'h-4 w-4',
                };

                return sizes[this.size];
            },

            getIconMarginClass() {
                const sizes = {
                    sm: `${!this.naked ? '-mr-1' : ''} ml-1`,
                    md: `${!this.naked ? '-mr-1' : ''} ml-2`,
                };

                return sizes[this.size];
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
        },
    };
</script>
