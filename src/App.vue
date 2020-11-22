<template>
    <div
        id="app"
        class="container mx-auto my-5"
    >
        <Buttons />

        <hr class="border-2 border-blue-gray-100 my-10">

        <Inputs />
    </div>
</template>

<script>
    import Buttons from '@/Buttons';
    import Inputs from '@/Inputs';

    export default {
        name: 'App',

        components: {
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
