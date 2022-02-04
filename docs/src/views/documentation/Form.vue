<template>
    <div class="space-y-10">
        <div>
            <h3 class="text-lg font-bold mb-3">
                Form input
            </h3>

            <div class="space-y-6">
                <div>
                    <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                        Variants
                    </h4>

                    <div class="space-y-4 max-w-2xl">
                        <TWFormInput variant="primary" />
                        <TWFormInput variant="success" />
                        <TWFormInput variant="danger" />
                        <TWFormInput variant="warning" />
                    </div>
                </div>

                <div>
                    <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                        Size
                    </h4>

                    <div class="space-y-4 max-w-2xl">
                        <TWFormInput size="sm" placeholder="Small" />
                        <TWFormInput size="md" placeholder="Medium" />
                        <TWFormInput size="lg" placeholder="Large" />
                    </div>
                </div>

                <div>
                    <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                        Disabled
                    </h4>

                    <div class="space-y-4 max-w-2xl">
                        <TWFormInput variant="primary" disabled placeholder="Disabled" />
                        <TWFormInput variant="success" disabled placeholder="Disabled" />
                        <TWFormInput variant="danger" disabled placeholder="Disabled" />
                        <TWFormInput variant="warning" disabled placeholder="Disabled" />
                    </div>
                </div>
            </div>
        </div>

        <div>
            <h3 class="text-lg font-bold mb-3">
                Form switch
            </h3>

            <div class="space-y-6">
                <div>
                    <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                        Variants
                    </h4>

                    <div class="flex items-center space-x-4">
                        <TWFormSwitch variant="primary" />
                        <TWFormSwitch variant="secondary" />
                        <TWFormSwitch variant="success" />
                        <TWFormSwitch variant="danger" />
                        <TWFormSwitch variant="warning" />
                    </div>
                </div>

                <div>
                    <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                        Sizes
                    </h4>

                    <div class="space-x-4">
                        <TWFormSwitch size="sm" />
                        <TWFormSwitch size="md" />
                        <TWFormSwitch size="lg" />
                    </div>
                </div>
            </div>
        </div>

        <div>
            <h3 class="text-lg font-bold mb-3">
                Select
            </h3>
            <div class="space-y-4">
                <TWFormSelect
                    placeholder="Select colors"
                    :options="['White', 'Blue', 'Green']"
                />

                <TWFormSelect
                    placeholder="Select country"
                    :options="[
                        { text: 'America', options: [{ text: 'Brazil', value: 'brazil' }] },
                        { text: 'Asia-Pacific', options: [{ text: 'Australia', value: 'australia' }] },
                    ]"
                />

                <TWFormSelect
                    multiple
                    placeholder="Select soccer teams"
                    :options="['Bahia', 'Palmeiras', 'Flamengo']"
                />
            </div>
        </div>

        <div>
            <h3 class="text-lg font-bold mb-3">
                Text area
            </h3>

            <div>
                <TWFormInput type="textarea" />
            </div>
        </div>

        <div>
            <h3 class="text-lg font-bold mb-3">
                Form group
            </h3>

            <div>
                <TWFormGroup
                    label="This is a label"
                    label-for="myInput"
                    help-text="This is a help text"
                    help-text-variant="danger"
                >
                    <TWFormInput
                        id="myInput"
                        variant="danger"
                    />
                </TWFormGroup>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            selected1: null,
            selected2: 'bb',
        }
    },
}
</script>
