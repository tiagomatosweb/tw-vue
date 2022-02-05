<template>
    <div
        :class="rootClass"
        @click.stop.prevent="onClick()"
    >
        <slot>
            <img
                v-if="src"
                :src="src"
                :alt="alt"
            >
        </slot>

        <span v-if="text && (!src || $slots['default'])">
            {{ text }}
        </span>
    </div>
</template>

<script>
import FixedMixin from '../../utils/FixedMixin';
import VariantMixin from '../../utils/VariantMixin';
import SizeMixin from '../../utils/SizeMixin';

export default {
    name: 'TWAvatar',
    mixins: [FixedMixin, VariantMixin, SizeMixin],
    props: {
        src: String,
        alt: String,
        text: String,
    },
    data() {
        return {
            config: this.$TWVue.Avatar,
        };
    },
    computed: {
        rootClass() {
            return [
                this.fixedClass.root,
                this.variantClass.root,
                this.sizeClass,
            ];
        },
    },
    methods: {
        onClick() {
            this.$emit('click');
        },
    },
};
</script>
