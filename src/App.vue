<template>
    <div
        id="app"
        class="container mx-auto my-5"
    >
        <Alerts />

        <hr class="border-2 border-blue-gray-100 my-10">

        <Buttons />

        <hr class="border-2 border-blue-gray-100 my-10">

        <Inputs />
    </div>
</template>

<script>
    import Alerts from '@/Alerts';
    import Buttons from '@/Buttons';
    import Inputs from '@/Inputs';

    export default {
        name: 'App',

        components: {
            Alerts,
            Inputs,
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
