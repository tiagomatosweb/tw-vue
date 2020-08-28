<template>
    <div>
        <h3 class="text-lg font-bold mb-2">
            TwToggle
        </h3>
        <div class="grid gap-4">
            <TwToggle 
                simple
            /> 
     
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
            };
        },

        computed: {
        },

        methods: {
        },
    };
</script>
