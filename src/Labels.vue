<template>
    <div>
        <h3 class="text-xl font-medium mb-3">
            Labels
        </h3>

        <TWFormLabel>
            I'm a label
        </TWFormLabel>
    </div>
</template>

<script>
    import TWFormLabel from '@/components/form-label/TWFormLabel';

    export default {
        name: 'Labels',

        components: {
            TWFormLabel,
        },
    };
</script>
