<template>
    <div>
        <TWFormLabel
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
    import TWFormLabel from '@/components/form-label/TWFormLabel';
    import TWHelpText from '@/components/help-text/TWHelpText';

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
