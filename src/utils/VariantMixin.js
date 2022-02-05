import { getDefaultVariant } from './variants';

export default {
    props: {
        variants: Object,
        variant: String,
    },
    computed: {
        localVariant() {
            return this.variant || getDefaultVariant(this.config);
        },
        variantClass() {
            const variants = { ...this.config.variants, ...this.variants };
            return variants[this.localVariant];
        },
    },
};
