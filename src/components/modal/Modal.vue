<template>
    <MountingPortal
        v-if="isInDOM"
        mount-to="body"
        append
    >
        <div
            v-show="isOpen"
            :class="rootClass"
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
                                    :class="buttonCloseClass"
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
                            v-if="!hideBtnCancel"
                            :variant="btnCancelVariant"
                            @click="onCancelClick()"
                        >
                            {{ btnCancelText }}
                        </TWButton>

                        <TWButton
                            v-if="!hideBtnOk"
                            :variant="btnOkVariant"
                            @click="onOkClick()"
                        >
                            {{ btnOkText }}
                        </TWButton>
                    </div>
                </div>
            </div>
        </div>
    </MountingPortal>
</template>

<script>
import { MountingPortal } from 'portal-vue';
import FixedMixin from '../../utils/FixedMixin';
import SizeMixin from '../../utils/SizeMixin';
import TWButton from '../button/Button';
import TWButtonClose from '../button-close/ButtonClose';

export default {
    name: 'TWModal',
    mixins: [FixedMixin, SizeMixin],
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        size: String,
        title: {
            type: String,
            default: 'Modal title',
        },
        titleTag: {
            type: String,
            default: 'h5',
        },
        hideHeader: Boolean,
        hideHeaderClose: Boolean,
        hideFooter: Boolean,
        hideBackdrop: Boolean,
        noCloseOnBackdrop: Boolean,
        noCloseOnEsc: Boolean,
        btnCancelVariant: {
            type: String,
            default: 'danger',
        },
        hideBtnCancel: Boolean,
        btnCancelText: {
            type: String,
            default: 'Cancel',
        },
        btnOkVariant: {
            type: String,
            default: 'primary',
        },
        hideBtnOk: Boolean,
        btnOkText: {
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
        rootClass() {
            return [
                this.fixedClass.root,
            ];
        },
        backdropClass() {
            return [
                this.fixedClass.backdrop,
            ];
        },
        wrapClass() {
            return [
                this.fixedClass.wrap,
                this.sizeClass
            ];
        },
        titleClass() {
            return [
                this.fixedClass.title,
            ];
        },
        headerClass() {
            return [
                this.fixedClass.header,
            ];
        },
        bodyClass() {
            return [
                this.fixedClass.body,
            ];
        },
        footerClass() {
            return [
                this.fixedClass.footer,
            ];
        },
        buttonCloseClass() {
            return [
                this.fixedClass.btnClose,
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
