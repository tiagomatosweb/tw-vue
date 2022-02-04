<template>
    <div>
        <h3 class="text-xl font-medium mb-3">
            Spinner
        </h3>

        <div class="space-y-6">
            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Sizes
                </h4>

                <div class="flex items-center space-x-4">
                    <TWSpinner size="xxs" />
                    <TWSpinner size="xs" />
                    <TWSpinner size="sm" />
                    <TWSpinner size="md" />
                    <TWSpinner size="lg" />
                    <TWSpinner size="xl" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                modal: {
                    xs: false,
                    sm: false,
                    md: false,
                    lg: false,
                    xl: false,
                    full: false,
                },
            };
        },

        methods: {},
    };
</script>

