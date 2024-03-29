<template>
    <Component
        :is="computedTag"
        :class="rootClass"
        :type="type"
        :disabled="$attrs.disabled || busy"
        v-bind="$attrs"
        v-on="$listeners"
    >
        <TWSpinner
            v-if="busy"
            size="xxs"
            :class="$slots.default || label ? '-ml-0.5 mr-2' : ''"
        />
        <template v-if="label">{{ label }}</template>
        <template v-else-if="$slots.default">
            <slot />
        </template>
    </Component>
</template>

<script>
import FixedMixin from '../../utils/FixedMixin';
import VariantMixin from '../../utils/VariantMixin';
import SizeMixin from '../../utils/SizeMixin';
import TWSpinner from '../spinner/Spinner';

export default {
    name: 'TWButton',
    mixins: [FixedMixin, VariantMixin, SizeMixin],
    inheritAttrs: false,
    components: {
        TWSpinner,
    },
    props: {
        label: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'button',
            validator: (value) => {
                return [
                    'button',
                    'submit',
                    'reset',
                ].includes(value);
            },
        },
        block: Boolean,
        busy: Boolean,
        hideLabelWhenBusy: Boolean,
        tag: {
            type: String,
            default: 'button',
        },
    },
    data() {
        return {
            config: this.$TWVue.Button,
        };
    },
    computed: {
        computedTag() {
            if (this.$attrs.disabled !== undefined && this.$attrs.disabled !== false) {
                return 'button';
            }
            return this.tag;
        },
        rootClass() {
            return [
                this.fixedClass.root,
                this.variantClass.root,
                this.sizeClass,
                this.getOpacity,
                this.getBlock,
            ];
        },
        getOpacity() {
            return this.busy || this.$attrs.disabled ? 'opacity-75' : '';
        },
        getBlock() {
            return this.block ? 'w-full justify-center' : '';
        },
    },
};
</script>
