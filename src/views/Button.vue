<template>
    <div>
        <h3 class="text-xl font-medium mb-3">
            Buttons
        </h3>

        <div>
            <TWButton variant="primary">
                Button
            </TWButton>
            <br>
            <br>
            <TWButton variant="primary" busy>
                Button
            </TWButton>
        </div>
    </div>
</template>

<script>
    import TWButton from '@/components/button/TWButton';

    export default {
        components: {
            TWButton,
        },
    };
</script>
