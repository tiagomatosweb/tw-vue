<template>
    <div>
        <h3 class="text-xl font-medium mb-3">
            Labels
        </h3>

        <TWHelpText>
            I am a help text
        </TWHelpText>

        <TWHelpText variant="primary">
            I am a help text
        </TWHelpText>

        <TWHelpText variant="secondary">
            I am a help text
        </TWHelpText>

        <TWHelpText variant="success">
            I am a help text
        </TWHelpText>

        <TWHelpText variant="danger">
            I am a help text
        </TWHelpText>

        <TWHelpText variant="warning">
            I am a help text
        </TWHelpText>

        <TWHelpText variant="info">
            I am a help text
        </TWHelpText>

        <TWHelpText variant="light">
            I am a help text
        </TWHelpText>

        <TWHelpText variant="dark">
            I am a help text
        </TWHelpText>
    </div>
</template>

<script>
    import TWHelpText from '@/components/help-text/TWHelpText';

    export default {
        name: 'HelpTexts',
        components: {
            TWHelpText,
        },
        data() {
            return {
            };
        },

        methods: {},
    };
</script>
