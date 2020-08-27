<template>
    <div>
        <h3 class="text-lg font-bold mb-2">
            TwToggle
        </h3>
        <div class="grid gap-4">
            <TwToggle /> 
     
            <TwToggle 
                short
            />     
        </div>
    </div>
</template>

<script>
    import TwToggle from '@/components/TwToggle';

    export default {
        name: 'TwToggles',

        components: {
            TwToggle,
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
