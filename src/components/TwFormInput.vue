<template>
    <div class="relative rounded-md shadow-sm">
        <input
            :id="id"
            :class="classList"
            :type="type"
            :name="name"
            :value="value"
            :placeholder="placeholder"
            v-on="inputListeners"
        >
    </div>
</template>

<script>
    export default {
        name: 'TwFormInput',

        props: {
            value: {
                type: [String, Number],
                default: '',
            },

            id: {
                type: String,
                default: undefined,
            },

            type: {
                type: String,
                default: 'text',
                validator: value => ['text', 'password', 'email'].includes(value),
            },

            placeholder: {
                type: String,
                default: '',
            },

            name: {
                type: String,
                default: '',
            },

            size: {
                type: String,
                default: 'md',
                validator: value => ['sm', 'md', 'lg'].includes(value),
            },
        },

        data() {
            return {};
        },

        computed: {
            classList() {
                return [
                    'appearance-none placeholder-cool-gray-400 rounded w-full text-cool-gray-800 transition duration-150 ease-in-out',
                    this.getTextSize,
                    this.getPaddingClass,
                    this.getBorderClass,
                ];
            },

            getTextSize() {
                const sizes = {
                    sm: 'text-sm leading-4',
                    md: 'text-sm leading-5',
                    lg: 'text-base leading-6',
                };

                return sizes[this.size];
            },

            getBorderClass() {
                return 'border border-cool-gray-300 focus:outline-none focus:border-blue-600';
            },

            getPaddingClass() {
                const sizes = {
                    sm: 'px-3 py-2 leading-4',
                    md: 'px-4 py-2 leading-5',
                    lg: 'py-3 px-5 leading-6',
                };

                return sizes[this.size];
            },

            inputListeners() {
                const vm = this;
                return {
                    ...this.$listeners,
                    input(event) {
                        vm.$emit('input', event.target.value);
                    },
                    change(event) {
                        vm.$emit('change', event.target.value);
                    },
                    blur(event) {
                        vm.$emit('blur', event);
                    },
                };
            },
        },

        methods: {},
    };
</script>
