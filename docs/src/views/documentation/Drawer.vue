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
                        <TWButton @click="drawer.sm = true">Small</TWButton>
                        <TWDrawer
                            v-model="drawer.sm"
                            title="Drawer"
                            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit aliquam ad hic recusandae soluta."
                            size="sm"
                            variant="secondary"
                        >
                            Drawer
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis facilis nulla quas quia quibusdam reprehenderit sapiente suscipit! Ab ad alias deleniti ipsum iure iusto libero odio qui quibusdam similique!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis facilis nulla quas quia quibusdam reprehenderit sapiente suscipit! Ab ad alias deleniti ipsum iure iusto libero odio qui quibusdam similique!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis facilis nulla quas quia quibusdam reprehenderit sapiente suscipit! Ab ad alias deleniti ipsum iure iusto libero odio qui quibusdam similique!</p>
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

