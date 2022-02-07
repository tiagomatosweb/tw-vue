<template>
    <div>
        <h3 class="text-xl font-medium mb-3">
            Drawer
        </h3>

        <div class="space-y-6">
            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Sizes
                </h4>

                <div class="flex items-center space-x-4">
                    <div>
                        {{ drawer.sm }}
                        <TWButton @click="drawer.sm = true">Small</TWButton>
                        <div ref="gsap">GSAP</div>
                        <TWDrawer
                            v-model="drawer.sm"
                            size="sm"
                        >
                            Drawer
                        </TWDrawer>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
    data() {
        return {
            drawer: {
                sm: false,
                md: false,
                lg: false,
                full: false,
            },
        };
    },

    methods: {
        run() {
            const el = this.$refs.gsap;
            gsap.set(el, { opacity: 0 })
            gsap.to(el, { opacity: 1, x: '100px', ease: 'expo.inOut' })
        },
    },
};
</script>

