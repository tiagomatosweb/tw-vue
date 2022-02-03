<template>
    <div>
        <h3 class="text-xl font-medium mb-3">
            Tags
        </h3>

        <div class="space-y-6">
            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Variants
                </h4>

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
            </div>

            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Sizes
                </h4>

                <div class="space-x-4">
                    <TWTag size="sm">
                        Small
                    </TWTag>
                    <TWTag size="lg">
                        Large
                    </TWTag>
                </div>
            </div>

            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Closables
                </h4>

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
    </div>
</template>
