<template>
    <div :class="classList">
        <button
            v-if="dismissible"
            type="button"
            class="absolute top-0 right-0 px-2 py-1 text-2xl font-bold leading-none opacity-75"
            style="font-family: 'Times New Roman', sans-serif;"
            @click.stop.prevent="onClose()"
        >
            <span>&times;</span>
        </button>

        <p><slot /></p>
    </div>
</template>

<script>
    import { TW_COLORS } from '@/utils/variants';

    export default {
        name: 'TwAlert',

        props: {
            theme: {
                type: String,
                default: 'gray',
                validator: value => TW_COLORS.includes(value),
            },

            dismissible: {
                type: Boolean,
                default: false,
            },
        },

        data() {
            return {
            };
        },

        computed: {
            classList() {
                return [
                    'relative border-l-4',
                    this.getTextColorClass,
                    this.getBgColorClass,
                    this.getPaddingClass,
                    this.getMarginClass,
                ];
            },

            getTextColorClass() {
                return `text-${this.theme}-700`;
            },

            getBgColorClass() {
                return `bg-${this.theme}-100 border-${this.theme}-400`;
            },

            getPaddingClass() {
                return 'py-3 pr-6 pl-4';
            },

            getMarginClass() {
                return 'mb-4';
            },
        },

        methods: {
            onClose() {
                if (this.dismissible) {
                    this.$emit('close');
                }
            },
        },
    };
</script>
