<template>
    <div>
        <h3 class="text-lg font-bold mb-3">
            Card
        </h3>

        <div class="space-y-6">
            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Variants
                </h4>

                <div class="space-y-4">
                    <TWCard variant="primary">
                        This is a <span class="font-semibold">primary</span> card!
                    </TWCard>

                    <TWCard variant="secondary">
                        This is a <span class="font-semibold">secondary</span> card!
                    </TWCard>

                    <TWCard variant="success">
                        This is a <span class="font-semibold">success</span> card!
                    </TWCard>

                    <TWCard variant="danger">
                        This is a <span class="font-semibold">danger</span> card!
                    </TWCard>

                    <TWCard variant="warning">
                        This is a <span class="font-semibold">warning</span> card!
                    </TWCard>
                </div>
            </div>

            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    No body
                </h4>

                <div class="space-y-4">
                    <TWCard no-body>
                        No body card
                    </TWCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    };
</script>
