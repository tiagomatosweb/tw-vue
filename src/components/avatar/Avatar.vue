<template>
    <div
        :class="baseClass"
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
import VariantMixin from '../../utils/VariantMixin';
import SizeMixin from '../../utils/SizeMixin';

export default {
    name: 'TWAvatar',
    mixins: [VariantMixin, SizeMixin],
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
        baseClass() {
            return [
                this.config.base,
                this.getSize,
                this.getVariant.base,
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
