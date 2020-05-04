<template>
    <div
        id="app"
        class="container mx-auto my-5"
    >
        <div class="grid gap-8">
            <Dropdowns />

            <Badges />

            <Buttons />
        </div>
    </div>
</template>

<script>
    import Dropdowns from '@/Dropdowns';
    import Buttons from '@/Buttons';
    import Badges from '@/Badges';

    export default {
        name: 'App',

        components: {
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
