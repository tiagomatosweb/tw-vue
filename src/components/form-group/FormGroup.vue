<template>
    <div>
        <TWFormLabel
            v-if="label"
            :for="labelFor"
            :label="label"
        />
        <slot />
        <TWHelpText
            v-if="helpText"
            :text="helpText"
            :variant="helpTextVariant"
        />
    </div>
</template>

<script>
import TWFormLabel from '../form-label/FormLabel';
import TWHelpText from '../help-text/HelpText';

export default {
    name: 'TWFormGroup',
    props: {
        label: String,
        labelFor: String,
        helpText: String,
        helpTextVariant: String,
    },
    components: {
        TWFormLabel,
        TWHelpText,
    },
};
</script>
