<template>
    <div>
        <h3 class="text-lg font-bold mb-3">
            Form Switch
        </h3>

        <div class="space-y-6">
            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Variants
                </h4>

                <div class="flex items-center space-x-4">
                    <TWFormSwitch
                        v-model="toggle"
                        variant="primary"
                    />
                    <TWFormSwitch
                        v-model="toggle"
                        variant="secondary"
                    />
                    <TWFormSwitch
                        v-model="toggle"
                        variant="success"
                    />
                    <TWFormSwitch
                        v-model="toggle"
                        variant="danger"
                    />
                    <TWFormSwitch
                        v-model="toggle"
                        variant="warning"
                    />
                </div>
            </div>

            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Sizes
                </h4>

                <div class="space-x-4">
                    <TWFormSwitch
                        v-model="toggle"
                        size="sm"
                    />
                    <TWFormSwitch
                        v-model="toggle"
                        size="md"
                    />
                    <TWFormSwitch
                        v-model="toggle"
                        size="lg"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TWFormSwitch from '@/components/form-switch/FormSwitch';

    export default {
        components: {
            TWFormSwitch,
        },

        data() {
            return {
                toggle: 1,
            };
        },
    };
</script>
