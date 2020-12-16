<template>
    <MountingPortal
        v-if="isInDOM"
        mount-to="body"
        append
    >
        <div
            v-show="isOpen"
            class="fixed z-10 inset-0 overflow-y-auto"
        >
            <div class="flex items-center justify-center min-h-screen p-4 text-center">
                <div
                    v-if="!hideBackdrop"
                    class="fixed inset-0 transition-opacity"
                    @click="onBackdropClick()"
                >
                    <div :class="backdropClassList" />
                </div>

                <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

                <div :class="wrapClassList">
                    <div
                        v-if="!hideHeader"
                        :class="headerClassList"
                    >
                        <slot name="header">
                            <slot name="header-title">
                                <Component
                                    :is="titleTag"
                                    :class="titleClassList"
                                >
                                    {{ title }}
                                </Component>
                            </slot>

                            <div
                                v-if="!hideHeaderClose"
                                class="-mr-2"
                            >
                                <TWButtonClose
                                    size="sm"
                                    @click="close()"
                                />
                            </div>
                        </slot>
                    </div>

                    <div :class="bodyClassList">
                        <slot />
                    </div>

                    <div
                        v-if="!hideFooter"
                        :class="footerClassList"
                    >
                        <TWButton
                            v-if="!hideCancel"
                            :variant="cancelVariant"
                            @click="onCancelClick()"
                        >
                            {{ cancelTitle }}
                        </TWButton>

                        <TWButton
                            v-if="!hideOk"
                            :variant="okVariant"
                            @click="onOkClick()"
                        >
                            {{ okTitle }}
                        </TWButton>
                    </div>
                </div>
            </div>
        </div>
    </MountingPortal>
</template>

<script>
    import { MountingPortal } from 'portal-vue';
    import TWButtonClose from '../button-close/TWButtonClose';
    import TWButton from '../button/TWButton';

    export default {
        name: 'TWModal',

        props: {
            value: {
                type: Boolean,
                default: false,
            },
            size: {
                type: String,
                default: 'md',
            },
            title: {
                type: String,
                default: 'Modal title',
            },
            titleTag: {
                type: String,
                default: 'h5',
            },
            hideHeader: {
                type: Boolean,
                default: false,
            },
            hideHeaderClose: {
                type: Boolean,
                default: false,
            },
            hideFooter: {
                type: Boolean,
                default: false,
            },
            hideBackdrop: {
                type: Boolean,
                default: false,
            },
            noCloseOnBackdrop: {
                type: Boolean,
                default: false,
            },
            noCloseOnEsc: {
                type: Boolean,
                default: false,
            },
            cancelVariant: {
                type: String,
                default: 'danger',
            },
            hideCancel: {
                type: Boolean,
                default: false,
            },
            cancelTitle: {
                type: String,
                default: 'Cancel',
            },
            okVariant: {
                type: String,
                default: 'primary',
            },
            hideOk: {
                type: Boolean,
                default: false,
            },
            okTitle: {
                type: String,
                default: 'OK',
            },
        },

        components: {
            MountingPortal,
            TWButtonClose,
            TWButton,
        },

        data() {
            return {
                TWOptions: {},
                isOpen: this.value,
                isInDOM: this.value, // TODO: this is required for transition to be added later on.
                backdropClassList: [],
                wrapClassList: [],
                titleClassList: [],
                headerClassList: [],
                bodyClassList: [],
                footerClassList: [],
            };
        },

        computed: {
            getSize() {
                const sizes = this.TWOptions.sizes;
                return sizes[this.size];
            },
        },

        watch: {
            value(vl) {
                this.isInDOM = vl;
                this.isOpen = vl;
            },

            isOpen(vl) {
                const body = document.body;
                if (vl) {
                    body.classList.add('overflow-hidden');
                } else {
                    body.classList.remove('overflow-hidden');
                }
            },
        },

        created() {
            this.TWOptions = this?.$TWVue?.TWModal || {};
            this.initClasses();

            window.addEventListener('keydown', this.onEsc);
        },

        methods: {
            initClasses() {
                this.backdropClassList = [this.TWOptions.backdrop, this.TWOptions.backdropOpacity];
                this.wrapClassList = [this.TWOptions.wrap, this.getSize];
                this.titleClassList = this.TWOptions.title;
                this.headerClassList = this.TWOptions.header;
                this.bodyClassList = this.TWOptions.body;
                this.footerClassList = this.TWOptions.footer;
            },
            onBackdropClick() {
                if (!this.noCloseOnBackdrop) {
                    this.close();
                }
            },
            onButtonCloseClick() {
                this.close();
            },
            onCancelClick() {
                this.close();
                this.$emit('cancel');
            },
            onOkClick() {
                this.close();
                this.$emit('ok');
            },
            close() {
                this.$emit('input', false);
                this.$emit('close');
            },
            onEsc(evt) {
                if (evt.key === 'Escape' && !this.noCloseOnEsc) {
                    this.close();
                }
            },
        },
    };
</script>
