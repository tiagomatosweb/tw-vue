<template>
    <div>
        <h3 class="text-xl font-medium mb-3">
            Alerts
        </h3>

        <div>
            <TWAlert dismissible>
                Dismissible
            </TWAlert>
            <TWAlert
                variant="primary"
                dismissible
            >
                Primary
            </TWAlert>
            <TWAlert
                variant="secondary"
                dismissible
            >
                Secondary
            </TWAlert>
            <TWAlert
                variant="success"
                dismissible
            >
                Success
            </TWAlert>
            <TWAlert
                variant="danger"
                dismissible
            >
                Danger
            </TWAlert>
            <TWAlert
                variant="warning"
                dismissible
            >
                Warning
            </TWAlert>
            <TWAlert
                variant="info"
                dismissible
            >
                Info
            </TWAlert>
            <TWAlert
                variant="light"
                dismissible
            >
                Light
            </TWAlert>
            <TWAlert
                variant="dark"
                dismissible
            >
                Dark
            </TWAlert>
        </div>
    </div>
</template>

<script>
    import TWAlert from '@/components/alert/TWAlert';

    export default {
        components: {
            TWAlert,
        },
    };
</script>
