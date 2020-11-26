<template>
    <div
        :class="classList"
        @click.stop.prevent="onClick()"
    >
        <img
            v-if="src"
            :src="src"
            :alt="alt"
        >

        <span
            v-else-if="text"
            :class="textClassList"
        >
            {{ text }}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'TWAvatar',

        props: {
            src: {
                type: String,
                default: undefined,
            },
            alt: {
                type: String,
                default: undefined,
            },
            size: {
                type: String,
                default: 'md',
            },
            text: {
                type: String,
                default: undefined,
            },
        },

        data() {
            return {
            };
        },

        computed: {
            classList() {
                return [
                    'inline-flex items-center justify-center bg-blue-gray-500 rounded-full overflow-hidden',
                    this.getSize,
                ];
            },

            getSize() {
                return this.TWOptions.sizes[this.size];
            },

            textClassList() {
                return [
                    'text-xs leading-none text-white',
                    this.getTextSize,
                ];
            },

            getTextSize() {
                const sizes = {
                    xs: 'text-xs',
                    sm: 'text-sm',
                    md: 'text-base',
                    lg: 'text-lg',
                    xl: 'text-xl',
                };

                return sizes[this.size];
            },
        },

        created() {
            this.TWOptions = this?.$TWVue?.TWAvatar || {};
        },

        methods: {
            onClick() {
                this.$emit('click');
            },
        },
    };
</script>
