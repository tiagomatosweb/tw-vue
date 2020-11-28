<template>
    <div>
        <h3 class="text-xl font-medium mb-3">
            Badges
        </h3>

        <TwBadge>
            Badge
        </TwBadge>

        <TwBadge variant="primary">
            Badge
        </TwBadge>

        <TwBadge variant="secondary">
            Badge
        </TwBadge>

        <TwBadge variant="success">
            Badge
        </TwBadge>

        <TwBadge variant="danger">
            Badge
        </TwBadge>

        <TwBadge variant="warning">
            Badge
        </TwBadge>

        <TwBadge variant="info">
            Badge
        </TwBadge>

        <TwBadge variant="light">
            Badge
        </TwBadge>

        <TwBadge variant="dark">
            Badge
        </TwBadge>
    </div>
</template>

<script>
    import TwBadge from '@/components/badge/TWBadge';

    export default {
        name: 'Badges',

        components: {
            TwBadge,
        },

        data() {
            return {
            };
        },

        methods: {},
    };
</script>
