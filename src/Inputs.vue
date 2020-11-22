<template>
    <div>
        <TwFormInput
            v-model="input"
            size="sm"
        />

        <TwFormInput
            v-model="input"
        />

        <TwFormInput
            v-model="input"
            size="lg"
        />
    </div>
</template>

<script>
    import TwFormInput from '@/components/TWFormInput';

    export default {
        name: 'Inputs',

        components: {
            TwFormInput,
        },

        data() {
            return {
                input: 'Text input',
            };
        },

        methods: {},
    };
</script>
