<template>
    <label :class="baseCLass">
        <input
            type="file"
            class="absolute opacity-0"
            @change="onChange"
        >

        <span>{{ fileName || 'Choose a file...' }}</span>

        <span class="flex bg-gray-200 border border-gray-300 -mr-5 -my-3 px-3 py-2">
            Browse
        </span>
    </label>
</template>

<script>
    export default {
        name: 'TWFormFile',

        props: {
            value: undefined,
            variant: {
                type: String,
                default: 'default',
            },
            size: {
                type: String,
                default: 'md',
            },
        },

        data() {
            return {
                fileName: null,
                TWOptions: {},
            };
        },

        computed: {
            baseCLass() {
                return [
                    'flex items-center justify-between relative overflow-hidden',
                    this.TWOptions.base,
                    this.getVariants,
                    this.getSize,
                ];
            },

            getVariants() {
                if (this.disabled) {
                    return this.TWOptions.disabled;
                }

                if (this.readonly) {
                    return this.TWOptions.readonly;
                }

                const variants = this.TWOptions.variants;
                return variants[this.variant];
            },

            getSize() {
                const sizes = this.TWOptions.sizes;
                return sizes[this.size];
            },
        },

        created() {
            this.TWOptions = this?.$TWVue?.TWFormInput || {};
        },

        methods: {
            onChange($evt) {
                this.fileName = $evt.target.files[0].name;
                this.$emit('input', $evt.target.files[0]);
            },
        },
    };
</script>
