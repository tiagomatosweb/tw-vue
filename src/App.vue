<template>
    <div
        id="app"
        class="container mx-auto my-5"
    >
        <Avatars />

        <hr class="border-2 border-blue-gray-100 my-10">

        <HelpTexts />

        <hr class="border-2 border-blue-gray-100 my-10">

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
    import HelpTexts from '@/HelpTexts';
    import Avatars from '@/Avatars';

    export default {
        name: 'App',

        components: {
            Avatars,
            HelpTexts,
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
