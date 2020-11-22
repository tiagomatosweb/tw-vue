<template>
    <div
        id="app"
        class="container mx-auto my-5"
    >
        <Buttons />

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
