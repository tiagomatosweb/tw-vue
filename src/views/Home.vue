<template>
    <div class="home">
        <Buttons />

        <Dropdowns />

        <Cards />
    </div>
</template>

<script>
    import Dropdowns from '@/Dropdowns';
    import Cards from '@/Cards';
    import Buttons from '@/Buttons';

    export default {
        name: 'Home',

        components: {
            Buttons,
            Cards,
            Dropdowns,
        },
    };
</script>
