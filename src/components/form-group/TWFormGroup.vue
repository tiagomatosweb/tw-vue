<template>
    <div>
        <TWFormLabel
            v-if="label"
            :label-for="labelFor"
        >
            {{ label }}
        </TWFormLabel>

        <slot />

        <TWHelpText
            v-if="invalidFeedback"
            variant="danger"
        >
            {{ invalidFeedback }}
        </TWHelpText>
    </div>
</template>

<script>
    import TWFormLabel from '../form-label/TWFormLabel';
    import TWHelpText from '../help-text/HelpText';

    export default {
        name: 'TWFormGroup',

        props: {
            label: {
                type: String,
                default: undefined,
            },
            labelFor: {
                type: String,
                default: undefined,
            },
            invalidFeedback: {
                type: String,
                default: undefined,
            },
        },

        components: {
            TWFormLabel,
            TWHelpText,
        },

        data() {
            return {
            };
        },

        methods: {},
    };
</script>
