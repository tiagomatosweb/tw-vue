<template>
    <MountingPortal
        v-if="isInDOM"
        mount-to="body"
        append
    >
        <div
            v-show="isOpen"
            class="fixed z-50 inset-0 overflow-y-auto"
        >
            <div class="flex items-center justify-center min-h-screen p-4 sm:p-0 text-center">
                <div
                    v-if="!hideBackdrop"
                    class="fixed inset-0 transition-opacity"
                    @click="onBackdropClick()"
                >
                    <div :class="backdropClass" />
                </div>

                <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

                <div :class="wrapClass">
                    <div
                        v-if="!hideHeader"
                        :class="headerClass"
                    >
                        <slot name="header">
                            <slot name="header-title">
                                <Component
                                    :is="titleTag"
                                    :class="titleClass"
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

                    <div :class="bodyClass">
                        <slot />
                    </div>

                    <div
                        v-if="!hideFooter"
                        :class="footerClass"
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
    import TWButtonClose from '../button-close/ButtonClose';
    import TWButton from '../button/Button';
    import SizeMixin from '../../utils/SizeMixin';

    export default {
        name: 'TWModal',
        mixins: [SizeMixin],
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
                config: this.$TWVue.Modal,
                isOpen: this.value,
                isInDOM: this.value, // TODO: this is required for transition to be added later on.
            };
        },
        computed: {
            backdropClass() {
                return [
                    'absolute inset-0',
                    this.config.backdropBackground,
                    this.config.backdropOpacity,
                ];
            },
            wrapClass() {
                return [
                    this.config.wrap,
                    this.getSize
                ];
            },
            titleClass() {
                return [
                    this.config.title,
                ];
            },
            headerClass() {
                return [
                    this.config.header,
                ];
            },
            bodyClass() {
                return [
                    this.config.body,
                ];
            },
            footerClass() {
                return [
                    this.config.footer,
                ];
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
            window.addEventListener('keydown', this.onEsc);
        },

        beforeDestroy() {
            window.removeEventListener('keydown', this.onEsc);
        },

        methods: {
            onBackdropClick() {
                if (!this.noCloseOnBackdrop) {
                    this.close();
                }
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
