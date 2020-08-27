<template>
    <div>
        <h3 class="text-lg font-bold mb-2">
            Badges
        </h3>

        <div class="grid gap-4">
            <!-- On: "bg-indigo-600", Off: "bg-gray-200" -->
            <span
                role="checkbox"
                tabindex="0"
                :aria-checked="isActive"
                :class="classList"
                @click="changeActive()"
            >
                <!-- On: "translate-x-5", Off: "translate-x-0" -->
                <span
                    aria-hidden="true"
                    :class="bodyClassList"
                />
            </span>
        </div>
    </div>
</template>

<script>
    // import TwBadge from '@/components/TwBadge';

    export default {
        name: 'TwToggles',

        components: {
            // TwBadge,
        },

        data() {
            return {
                isActive: false,
            };
        },

        computed: {
            classList() {
                return [
                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline',
                    this.getActiveClass,
                ];
            },

            getActiveClass() {
                return this.isActive ? 'bg-indigo-600' : 'bg-gray-200';
            },

            bodyClassList(){
                return [
                    this.getBodyActiveClass,
                    'inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200',
                ];
            },

            getBodyActiveClass(){
                return this.isActive ? 'translate-x-5' : 'translate-x-0';
            },
        },

        methods: {
            changeActive(){
                this.isActive = !this.isActive;
            },
        },
    };
</script>
