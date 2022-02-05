<template>
    <button
        type="button"
        v-on="$listeners"
        :class="rootClass"
    >
        <svg
            style=" height: 100%; width: 100%;"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    </button>
</template>
<script>
import FixedMixin from '../../utils/FixedMixin';
import SizeMixin from '../../utils/SizeMixin';

export default {
    name: 'TWButtonClose',
    mixins: [FixedMixin, SizeMixin],
    data() {
        return {
            config: this.$TWVue.ButtonClose,
        };
    },
    computed: {
        rootClass() {
            return [
                this.fixedClass.root,
                this.sizeClass,
            ];
        },
    },
};
</script>
