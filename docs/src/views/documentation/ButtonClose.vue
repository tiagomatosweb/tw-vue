<template>
    <div>
        <h3 class="text-lg font-bold mb-3">
            Buttons close
        </h3>

        <div class="space-y-6">
            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Variants
                </h4>

                <div class="flex items-center space-x-4">
                    <TWButtonClose variant="primary">
                        Primary
                    </TWButtonClose>

                    <TWButtonClose variant="secondary">
                        Secondary
                    </TWButtonClose>

                    <TWButtonClose variant="success">
                        Success
                    </TWButtonClose>

                    <TWButtonClose variant="danger">
                        Danger
                    </TWButtonClose>

                    <TWButtonClose variant="warning">
                        Warning
                    </TWButtonClose>
                </div>
            </div>

            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Sizes
                </h4>

                <div class="flex items-center space-x-4">
                    <TWButtonClose size="sm" />

                    <TWButtonClose size="md" />

                    <TWButtonClose size="lg" />
                </div>
            </div>
        </div>
    </div>
</template>
