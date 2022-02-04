<template>
    <div>
        <h3 class="text-xl font-medium mb-3">
            Modal
        </h3>

        <div class="space-y-6">
            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Sizes
                </h4>

                <div class="flex items-center space-x-4">
                    <div>
                        <TWButton @click="modal.sm = true">Small</TWButton>
                        <TWModal
                            size="sm"
                            v-model="modal.sm">
                            Small
                        </TWModal>
                    </div>

                    <div>
                        <TWButton @click="modal.md = true">Medium</TWButton>
                        <TWModal
                            size="md"
                            v-model="modal.md">
                            Medium
                        </TWModal>
                    </div>

                    <div>
                        <TWButton @click="modal.lg = true">Large</TWButton>
                        <TWModal
                            size="lg"
                            v-model="modal.lg">
                            Large
                        </TWModal>
                    </div>

                    <div>
                        <TWButton @click="modal.full = true">Full</TWButton>
                        <TWModal
                            size="full"
                            v-model="modal.full">
                            Full
                        </TWModal>
                    </div>
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
                    sm: false,
                    md: false,
                    lg: false,
                    full: false,
                },
            };
        },

        methods: {},
    };
</script>

