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
                <!--
                  Background overlay, show/hide based on slide-over state.

                  Entering: "ease-in-out duration-500"
                    From: "opacity-0"
                    To: "opacity-100"
                  Leaving: "ease-in-out duration-500"
                    From: "opacity-100"
                    To: "opacity-0"
                -->
                <div ref="backdrop" class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

                <div ref="panel" class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                    <!--
                      Slide-over panel, show/hide based on slide-over state.

                      Entering: "transform transition ease-in-out duration-500 sm:duration-700"
                        From: "translate-x-full"
                        To: "translate-x-0"
                      Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
                        From: "translate-x-0"
                        To: "translate-x-full"
                    -->
                    <div class="w-screen max-w-md">
                        <div class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                            <div class="px-4 sm:px-6">
                                <div class="flex items-start justify-between">
                                    <h2 class="text-lg font-medium text-gray-900">
                                        Panel title
                                    </h2>
                                    <div class="ml-3 h-7 flex items-center">
                                        <button
                                            type="button"
                                            class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            @click="close()"
                                        >
                                            <span class="sr-only">Close panel</span>
                                            <!-- Heroicon name: outline/x -->
                                            <svg
                                                class="h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-6 relative flex-1 px-4 sm:px-6">
                                <!-- Replace with your content -->
                                <div class="absolute inset-0 px-4 sm:px-6">
                                    <div
                                        class="h-full border-2 border-dashed border-gray-200"
                                        aria-hidden="true"
                                    />
                                </div>
                                <!-- /End replace -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
// import Velocity from 'velocity-animate';
import { gsap } from 'gsap';

export default {
    name: 'TWDrawer',
    props: {
        value: Boolean,
    },
    data() {
        return {
            isOpen: this.value,
            backdrop: this.$refs.backdrop,
            panel: this.$refs.backdrop,
            t: null,
            destroyed: false,
        }
    },
    // mounted() {
    //     this.backdrop = this.$refs.backdrop;
    //     this.panel = this.$refs.panel;
    // },

    watch: {
        value(vl) {
            // this.isInDOM = vl;
            console.log(vl);
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
    methods: {
        close() {
            this.$emit('input', false);
            this.$emit('close');
        },
        beforeEnter() {
            this.backdrop = this.$refs.backdrop;
            this.panel = this.$refs.panel;

            // this.backdrop.style.display = 'none';
            // this.panel.style.display = 'none';

            gsap.set(this.backdrop, { opacity: 0 })
            gsap.set(this.panel, { opacity: 0, x: '100%' })
            this.t = gsap.timeline()
        },

        enter(el, done) {
            gsap.to(this.backdrop, { opacity: 1, ease: 'expo.inOut', duration: 0.2 })
            gsap.to(this.panel, { opacity: 1, x: '0px', ease: 'expo.inOut', onComplete: done })

            // this.t
            //     .to(this.backdrop, { opacity: 1, ease: 'expo.inOut', duration: 0.2 })
            //     .to(this.panel, { opacity: 1, x: '0px', ease: 'expo.inOut', onComplete: done }, '-=0.2')
            // Velocity(this.backdrop, 'fadeIn', { easing: 'easeInOutQuart', duration: 200 });
            // Velocity(this.panel, 'fadeIn', { easing: 'easeInOutQuart', duration: 600, complete: done });
            // this.$velocity(el, 'slideDown', { easing: 'easeInOutQuart', duration: 300, complete: done });

            // this.$velocity(el, { translateY: [0, '100%'] }, {
            //     easing: 'easeInOutQuart',
            //     duration: 600,
            //     complete: done,
            // });
            // console.log('enter', el);
        },

        // beforeLeave(el) {
            // console.log('beforeLeave', el);
            // el.style['overflow-y'] = '';
        // },

        leave(el, done) {
            gsap.to(this.backdrop, { opacity: 0, ease: 'expo.inOut', duration: 0.2 })
            gsap.to(this.panel, { opacity: 0, x: '100%', ease: 'expo.inOut', onComplete: done })

            // this.t.reverse();
            // this.t.eventCallback('onComplete', done);
            // gsap.to(this.panel, { opacity: 0, x: '100%', ease: 'expo.inOut', onComplete: done })
            // Velocity(this.panel, 'fadeOut', { easing: 'easeInOutQuart', duration: 600 });
            // Velocity(this.backdrop, 'fadeOut', { easing: 'easeInOutQuart', duration: 200, delay: 200, complete: done });
            // console.log('leave', el);
            // this.$destroy();
            // this.$velocity(el, 'slideUp', { easing: 'easeInOutQuart', duration: 300, complete: done });
        },
        afterLeave() {
            // this.destroyed = true;
            // this.$destroy();
        },
    },
};
</script>

<style>
.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
