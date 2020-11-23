<template>
    <div>
        <h3 class="text-xl font-medium mb-3">
            Alerts
        </h3>

        <div>
            <TWAlert dismissible>
                Dismissible
            </TWAlert>
            <TWAlert variant="primary">
                Primary
            </TWAlert>
            <TWAlert variant="secondary">
                Secondary
            </TWAlert>
            <TWAlert variant="success">
                Success
            </TWAlert>
            <TWAlert variant="danger">
                Danger
            </TWAlert>
            <TWAlert variant="warning">
                Warning
            </TWAlert>
            <TWAlert variant="info">
                Info
            </TWAlert>
            <TWAlert variant="light">
                Light
            </TWAlert>
            <TWAlert variant="dark">
                Dark
            </TWAlert>
        </div>
    </div>
</template>

<script>
    import TWAlert from '@/components/TWAlert';

    export default {
        name: 'Alerts',

        components: {
            TWAlert,
        },
    };
</script>
