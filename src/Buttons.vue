<template>
    <div>
        <h3 class="text-lg font-bold mb-2">
            Buttons
        </h3>

        <div class="">
            <TwButton>
                Button
            </TwButton>

            <TwButton variant="naked">
                Button
            </TwButton>

            <TwButton variant="primary">
                Button
            </TwButton>

            <TwButton variant="secondary">
                Button
            </TwButton>

            <TwButton variant="success">
                Button
            </TwButton>

            <TwButton variant="danger">
                Button
            </TwButton>

            <TwButton variant="warning">
                Button
            </TwButton>

            <TwButton variant="info">
                Button
            </TwButton>

            <TwButton variant="light">
                Button
            </TwButton>

            <TwButton variant="dark">
                Button
            </TwButton>
        </div>

        <h3 class="text-lg font-bold mb-2">
            Buttons sizes
        </h3>

        <div class="">
            <TwButton
                variant="primary"
                size="xs"
            >
                Button
            </TwButton>

            <TwButton
                variant="primary"
                size="sm"
            >
                Button
            </TwButton>

            <TwButton
                variant="primary"
                size="md"
            >
                Button
            </TwButton>

            <TwButton
                variant="primary"
                size="lg"
            >
                Button
            </TwButton>

            <TwButton
                variant="primary"
                size="xl"
            >
                Button
            </TwButton>

            <TwButton
                variant="primary"
                size="2xl"
            >
                Button
            </TwButton>
        </div>
    </div>
</template>

<script>
    import TwButton from '@/components/TwButton';

    export default {
        name: 'Buttons',

        components: {
            TwButton,
        },

        data() {
            return {
            };
        },

        methods: {},
    };
</script>
