<template>
    <div>
        <TWLabel
            :label-for="labelFor"
        >
            {{ label }}
        </TWLabel>

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
    import TWLabel from '@/components/TWLabel';
    import TWHelpText from '@/components/TWHelpText';

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
            TWLabel,
            TWHelpText,
        },

        data() {
            return {
            };
        },

        methods: {},
    };
</script>
