<template>
    <small :class="classList">
        <slot />
    </small>
</template>

<script>
    import { TW_COLORS } from '@/utils/variants';

    export default {
        name: 'TwHelpText',

        props: {
            theme: {
                type: String,
                default: 'gray',
                validator: value => TW_COLORS.includes(value),
            },
        },

        data() {
            return {};
        },

        computed: {
            classList() {
                return [
                    'text-xs m-0 py-1',
                    this.getColorClass,
                ];
            },

            getColorClass() {
                return `text-${this.theme}-400`;
            },
        },

        methods: {},
    };
</script>
