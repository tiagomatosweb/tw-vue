<template>
    <div>
        <TWPagination
            :total="20"
            :per-page="5"
        />
    </div>
</template>

<script>
    import TWPagination from '@/components/pagination/TWPagination';

    export default {
        name: 'Paginations',

        components: {
            TWPagination,
        },

        data() {
            return {
            };
        },

        methods: {},
    };
</script>
