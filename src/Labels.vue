<template>
    <div>
        <h3 class="text-xl font-medium mb-3">
            Labels
        </h3>

        <TWLabel>
            I'm a label
        </TWLabel>
    </div>
</template>

<script>
    import TWLabel from '@/components/TWLabel';

    export default {
        name: 'Labels',

        components: {
            TWLabel,
        },
    };
</script>
