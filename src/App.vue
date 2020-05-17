<template>
    <div
        id="app"
        class="container mx-auto my-5"
    >
        <div class="grid gap-8">
            <Dropdowns />

            <Paginators />

            <Badges />

            <Buttons />
        </div>
    </div>
</template>

<script>
    import Dropdowns from '@/Dropdowns';
    import Buttons from '@/Buttons';
    import Badges from '@/Badges';
    import Paginators from '@/Paginators';

    export default {
        name: 'App',

        components: {
            Paginators,
            Dropdowns,
            Badges,
            Buttons,
        },

        data() {
            return {
            };
        },

        methods: {

        },
    };
</script>
