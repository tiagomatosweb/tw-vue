<template>
    <div>
        <h3 class="text-xl font-medium mb-3">
            Buttons
        </h3>

        <TWButtonClose size="xs" />
        <TWButtonClose size="sm" />
        <TWButtonClose size="md" />
        <TWButtonClose size="lg" />

        <div class="grid grid-flow-col auto-cols-max gap-1">
            <TwButton>
                Default
            </TwButton>

            <TwButton variant="naked">
                Naked
            </TwButton>

            <TwButton variant="primary">
                Primary
            </TwButton>

            <TwButton variant="secondary">
                Secondary
            </TwButton>

            <TwButton variant="success">
                Success
            </TwButton>

            <TwButton variant="danger">
                Danger
            </TwButton>

            <TwButton variant="warning">
                Warning
            </TwButton>

            <TwButton variant="info">
                Info
            </TwButton>

            <TwButton variant="light">
                Light
            </TwButton>

            <TwButton variant="dark">
                Dark
            </TwButton>
        </div>

        <hr class="border-blue-gray-200 my-8">

        <h4 class="text-base mb-2">
            Sizes
        </h4>

        <div>
            <TwButton
                variant="primary"
                size="xs"
                class="mr-1"
                @click="test"
            >
                Extra small
            </TwButton>

            <TwButton
                variant="primary"
                size="sm"
                class="mx-1"
            >
                Small
            </TwButton>

            <TwButton
                variant="primary"
                size="md"
                class="mx-1"
            >
                Medium
            </TwButton>

            <TwButton
                variant="primary"
                size="lg"
                class="mx-1"
            >
                Large
            </TwButton>

            <TwButton
                variant="primary"
                size="xl"
                class="mx-1"
            >
                Extra large
            </TwButton>

            <TwButton
                variant="primary"
                size="2xl"
                class="ml-1"
            >
                2x large
            </TwButton>
        </div>

        <h4 class="text-base mb-2">
            Busy
        </h4>

        <TwButton
            variant="primary"
            busy
        >
            Button
        </TwButton>

        <TwButton
            variant="primary"
        >
            Busy
        </TwButton>
    </div>
</template>

<script>
    import TwButton from '@/components/button/TWButton';
    import TWButtonClose from '@/components/button-close/TWButtonClose';

    export default {
        name: 'Buttons',

        components: {
            TWButtonClose,
            TwButton,
        },

        data() {
            return {
            };
        },

        methods: {
            test() {
                console.log('test');
            },
        },
    };
</script>
