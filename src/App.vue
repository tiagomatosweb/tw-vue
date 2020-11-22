<template>
    <div
        id="app"
        class="container mx-auto my-5"
    >
        <Buttons />
    </div>
</template>

<script>
    import Buttons from '@/Buttons';

    export default {
        name: 'App',

        components: {
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
