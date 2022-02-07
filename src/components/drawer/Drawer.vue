<template>
    <Transition
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        @after-leave="afterLeave"
    >
        <div
            v-show="isOpen"
            class="fixed inset-0 overflow-hidden"
        >
            <div class="absolute inset-0 overflow-hidden">
                <div
                    ref="backdrop"
                    :class="backdropClass"
                />

                <div
                    ref="panel"
                    :class="panelWrapperClass"
                >
                    <div :class="sizeClass">
                        <div :class="panelClass">
                            <slot name="header">
                                <div :class="headerClass">
                                    <div class="flex items-center justify-between">
                                        <h2 :class="titleClass">
                                            {{ title }}
                                        </h2>

                                        <div class="ml-3 h-7 flex items-center">
                                            <ButtonClose
                                                :class="btnCloseClass"
                                                size="sm"
                                                @click="close()"
                                            />
                                        </div>
                                    </div>

                                    <div
                                        v-if="description"
                                        :class="descriptionWrapperClass"
                                    >
                                        <p :class="descriptionClass">
                                            {{ description }}
                                        </p>
                                    </div>
                                </div>
                            </slot>

                            <div :class="containerClass">
                                <slot />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
import { gsap } from 'gsap';
import FixedMixin from '../../utils/FixedMixin';
import VariantMixin from '../../utils/VariantMixin';
import ButtonClose from '../../components/button-close/ButtonClose';

export default {
    name: 'TWDrawer',
    mixins: [FixedMixin, VariantMixin],
    props: {
        value: Boolean,
        title: String,
        description: String,
        direction: {
            type: String,
            default: 'right',
            validator(value) {
                return ['right', 'left'].includes(value);
            },
        }
    },
    components: {
        ButtonClose,
    },
    data() {
        return {
            config: this.$TWVue.Drawer,
            isOpen: this.value,
            backdrop: this.$refs.backdrop,
            panel: this.$refs.backdrop,
            destroyed: false,
        }
    },
    watch: {
        value(vl) {
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
    computed: {
        backdropClass() {
            return [
                'absolute inset-0',
                this.fixedClass.backdrop,
            ];
        },
        panelWrapperClass() {
            return [
                'flex fixed inset-y-0 pl-10',
                this.getDirectionClass,
            ];
        },
        sizeClass() {
            return 'w-screen max-w-md';
        },
        panelClass() {
            return [
                'h-full',
                this.fixedClass.panel
            ];
        },
        headerClass() {
            return [
                this.fixedClass.header,
                this.variantClass.header,
            ];
        },
        titleClass() {
            return [
                this.fixedClass.title,
                this.variantClass.title,
            ];
        },
        descriptionWrapperClass() {
            return [
                this.fixedClass.descriptionWrapper,
                this.variantClass.descriptionWrapper,
            ];
        },
        descriptionClass() {
            return [
                this.fixedClass.description,
                this.variantClass.description,
            ];
        },
        btnCloseClass() {
            return [
                this.fixedClass.btnClose,
                this.variantClass.btnClose,
            ];
        },
        containerClass() {
            return [
                this.fixedClass.container,
            ];
        },
        getDirectionClass() {
            return this.direction === 'right' ? 'right-0' : 'left-0';
        }
    },
    methods: {
        close() {
            this.$emit('input', false);
            this.$emit('close');
        },
        beforeEnter() {
            this.backdrop = this.$refs.backdrop;
            this.panel = this.$refs.panel;

            gsap.set(this.backdrop, { opacity: 0 })
            gsap.set(this.panel, { opacity: 0, x: '100%' })
        },

        enter(el, done) {
            gsap.to(this.backdrop, { opacity: 1, ease: 'expo.inOut', duration: 0.2 })
            gsap.to(this.panel, { opacity: 1, x: '0px', ease: 'expo.inOut', onComplete: done })
        },

        // beforeLeave(el) {
            // console.log('beforeLeave', el);
            // el.style['overflow-y'] = '';
        // },

        leave(el, done) {
            gsap.to(this.backdrop, { opacity: 0, ease: 'expo.inOut', duration: 0.2 })
            gsap.to(this.panel, { opacity: 0, x: '100%', ease: 'expo.inOut', onComplete: done })
        },
        afterLeave() {
            // this.destroyed = true;
            // this.$destroy();
        },
    },
};
</script>
