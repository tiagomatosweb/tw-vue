<template>
    <div :class="rootClass">
        <slot name="content">
            <div class="flex">
                <div
                    v-if="$slots['icon']"
                    class="flex-shrink-0 mr-3"
                >
                    <slot name="icon" />
                </div>

                <div :class="dismissible ? 'mr-10 ' : null">
                    <slot />
                </div>
            </div>
        </slot>

        <button
            v-if="dismissible"
            :class="btnCloseClass"
            @click.stop.prevent="onClose()"
        >
            <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >
                <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>
    </div>
</template>

<script>
import FixedMixin from '../../utils/FixedMixin';
import VariantMixin from '../../utils/VariantMixin';

export default {
    name: 'TWAlert',
    mixins: [FixedMixin, VariantMixin],
    props: {
        variants: Object,
        variant: String,
        dismissible: Boolean,
    },
    data() {
        return {
            config: this.$TWVue.Alert,
        };
    },
    computed: {
        rootClass() {
            return [
                'relative',
                this.fixedClass.root,
                this.variantClass.root,
            ];
        },
        btnCloseClass() {
            return [
                'absolute right-4 top-4 ml-auto -mx-1.5 -my-1.5',
                this.fixedClass.btnClose,
                this.variantClass.btnClose,
            ];
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
