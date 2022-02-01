<template>
    <div>
        <h3 class="text-xl font-medium mb-3">
            Tags
        </h3>

        <div class="space-y-4">
            <div class="space-x-4">
                <TWTag variant="primary">
                    Primary
                </TWTag>
                <TWTag variant="secondary">
                    Secondary
                </TWTag>
                <TWTag variant="success">
                    Success
                </TWTag>

                <TWTag variant="danger">
                    Danger
                </TWTag>
                <TWTag variant="warning">
                    Warning
                </TWTag>
            </div>

            <div class="space-x-4">
                <TWTag size="sm">
                    Small
                </TWTag>
                <TWTag size="lg">
                    Large
                </TWTag>
            </div>

            <div class="space-x-4">
                <TWTag
                    variant="secondary"
                    closable
                >
                    Closable
                </TWTag>
                <TWTag
                    variant="danger"
                    closable
                    size="lg"
                >
                    Closable
                </TWTag>
            </div>
        </div>
    </div>
</template>

<script>
    import TWTag from '@/components/tag/Tag';

    export default {
        components: {
            TWTag,
        },

        data() {
            return {
            };
        },

        methods: {},
    };
</script>
