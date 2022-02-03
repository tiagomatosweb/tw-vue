<template>
    <span :class="baseClass">
        <slot />

        <button
            v-if="closable"
            type="button"
            :class="baseButtonCloseClass"
        >
            <svg
                class="h-2 w-2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 8 8"
            >
                <path
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="M1 1l6 6m0-6L1 7"
                />
            </svg>
        </button>
    </span>
</template>

<script>
import VariantMixin from '../../utils/VariantMixin';
import SizeMixin from '../../utils/SizeMixin';

export default {
    name: 'TWTag',
    mixins: [VariantMixin, SizeMixin],
    props: {
        closable: Boolean,
    },
    data() {
        return {
            config: this.$TWVue.Tag,
        };
    },
    computed: {
        baseClass() {
            return [
                this.config.base,
                this.getSize,
                this.getVariant.base,
            ];
        },
        baseButtonCloseClass() {
            return [
                'h-4 w-4 ml-1 -mr-2',
                this.config.baseButtonClose,
                this.getVariant.buttonClose,
            ];
        },
    },
};
</script>
