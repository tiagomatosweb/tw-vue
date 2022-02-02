<template>
    <div>
        <h3 class="text-lg font-bold mb-3">
            Alerts
        </h3>

        <div>
            <TWAlert dismissible>
                This is a <span class="font-semibold">primary</span> alert!
            </TWAlert>

            <TWAlert
                variant="secondary"
                dismissible
            >
                This is a <span class="font-semibold">secondary</span> alert!
            </TWAlert>

            <TWAlert
                variant="success"
                dismissible
            >
                This is a <span class="font-semibold">success</span> alert!
            </TWAlert>

            <TWAlert
                variant="danger"
                dismissible
            >
                This is a <span class="font-semibold">danger</span> alert!
            </TWAlert>

            <TWAlert
                variant="warning"
                dismissible
            >
                This is a <span class="font-semibold">warning</span> alert!
            </TWAlert>
        </div>
    </div>
</template>

<script>
    import TWAlert from '@/components/alert/Alert';

    export default {
        components: {
            TWAlert,
        },
    };
</script>
