<template>
    <div
        id="app"
        class="container mx-auto my-5"
    >
        <Labels />

        <hr class="border-2 border-blue-gray-100 my-10">

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
    import Labels from '@/Labels';

    export default {
        name: 'App',

        components: {
            Labels,
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
