<template>
    <div>
        <h3 class="text-xl font-medium mb-3">
            Form input
        </h3>

        <div class="grid gap-2">
            <TWFormInput />
            <TWFormInput variant="success" />
            <TWFormInput variant="danger" />
            <TWFormInput variant="warning" />
            <TWFormInput variant="info" />
        </div>

        <hr class="border-blue-gray-200 my-8">

        <h4 class="text-base mb-2">
            Sizes
        </h4>

        <div class="grid gap-2">
            <TWFormInput
                placeholder="Text input xs"
                size="xs"
            />

            <TWFormInput
                placeholder="Text input sm"
                size="sm"
            />

            <TWFormInput
                placeholder="Text input md"
            />

            <TWFormInput
                placeholder="Text input lg"
                size="lg"
            />

            <TWFormInput
                placeholder="Text input xl"
                size="xl"
            />

            <TWFormInput
                placeholder="Text input 2xl"
                size="2xl"
            />
        </div>

        <hr class="border-blue-gray-200 my-8">

        <h4 class="text-base mb-2">
            Disable
        </h4>

        <TWFormInput
            v-model="input"
            disabled
        />

        <hr class="border-blue-gray-200 my-8">

        <h4 class="text-base mb-2">
            Readonly
        </h4>

        <TWFormInput
            v-model="input"
            readonly
        />
    </div>
</template>

<script>
    import TWFormInput from '@/components/TWFormInput';

    export default {
        name: 'Inputs',

        components: {
            TWFormInput,
        },

        data() {
            return {
                input: 'Text input',
            };
        },

        methods: {},
    };
</script>
