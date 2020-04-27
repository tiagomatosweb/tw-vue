<template>
    <div class="spinner-border spinner-border-sm" />
</template>

<script>
    export default {
        name: 'TwSpinner',

        data() {
            return {};
        },

        methods: {},
    };
</script>

<style
    lang="scss"
    scoped
>
    $spinner-width:           2rem !default;
    $spinner-height:          $spinner-width !default;
    $spinner-border-width:    0.25em !default;
    $spinner-animation-speed: 0.75s !default;

    $spinner-width-sm:        1rem !default;
    $spinner-height-sm:       $spinner-width-sm !default;
    $spinner-border-width-sm: 0.1em !default;

    @keyframes spinner-border {
        to { transform: rotate(360deg); }
    }

    .spinner-border {
        animation: spinner-border $spinner-animation-speed linear infinite;
        border: $spinner-border-width solid currentColor;
        // stylelint-disable-next-line property-blacklist
        border-radius: 50%;
        border-right-color: transparent;
        display: inline-block;
        height: $spinner-height;
        vertical-align: text-bottom;
        width: $spinner-width;
    }

    .spinner-border-sm {
        border-width: $spinner-border-width-sm;
        height: $spinner-height-sm;
        width: $spinner-width-sm;
    }
</style>
