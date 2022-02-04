<template>
    <div>
        <h3 class="text-lg font-bold mb-3">
            Button
        </h3>

        <div class="space-y-6">
            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Variants
                </h4>

                <div class="space-y-4">
                    <div class="flex items-center space-x-4">
                        <TWButton variant="primary">
                            Primary
                        </TWButton>

                        <TWButton variant="secondary">
                            Secondary
                        </TWButton>

                        <TWButton variant="success">
                            Success
                        </TWButton>

                        <TWButton variant="danger">
                            Danger
                        </TWButton>

                        <TWButton variant="warning">
                            Warning
                        </TWButton>

                        <TWButton variant="ghost">
                            Ghost
                        </TWButton>
                    </div>

                    <div class="flex items-center space-x-4">
                        <TWButton variant="primaryOutline">
                            Primary
                        </TWButton>

                        <TWButton variant="secondaryOutline">
                            Secondary
                        </TWButton>

                        <TWButton variant="successOutline">
                            Success
                        </TWButton>

                        <TWButton variant="dangerOutline">
                            Danger
                        </TWButton>

                        <TWButton variant="warningOutline">
                            Warning
                        </TWButton>
                    </div>
                </div>
            </div>

            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Sizes
                </h4>

                <div class="flex items-center space-x-4">
                    <TWButton size="xs">
                        Extra small
                    </TWButton>

                    <TWButton size="sm">
                        Small
                    </TWButton>

                    <TWButton size="md">
                        Default
                    </TWButton>

                    <TWButton size="lg">
                        Large
                    </TWButton>

                    <TWButton size="xl">
                        Extra large
                    </TWButton>
                </div>
            </div>

            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Busy
                </h4>

                <div class="flex items-center space-x-4">
                    <TWButton busy>
                        Loading
                    </TWButton>

                    <TWButton
                        variant="secondary"
                        busy
                    >
                        Loading
                    </TWButton>

                    <TWButton
                        variant="success"
                        busy
                    >
                        Loading
                    </TWButton>

                    <TWButton
                        variant="danger"
                        busy
                    >
                        Loading
                    </TWButton>

                    <TWButton
                        variant="warning"
                        busy
                        label="Loading"
                    />
                </div>
            </div>

            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Block
                </h4>

                <div class="max-w-2xl">
                    <TWButton block>
                        Block button
                    </TWButton>
                </div>
            </div>
        </div>
    </div>
</template>
