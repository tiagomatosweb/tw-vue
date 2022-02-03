import { getDefaultSize } from './size';

export default {
    props: {
        sizes: Object,
        size: String,
    },
    computed: {
        localSize() {
            return this.size || getDefaultSize(this.config);
        },
        getSize() {
            const sizes = { ...this.config.sizes, ...this.sizes };
            return sizes[this.localSize];
        },
    },
};
