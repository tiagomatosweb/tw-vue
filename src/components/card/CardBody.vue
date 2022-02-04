<template>
    <div :class="TWOptions.body">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'TWCardBody',

        data() {
            return {
                TWOptions: {},
            };
        },

        created() {
            this.TWOptions = this?.$TWVue?.TWCard || {};
        },
    };
</script>
