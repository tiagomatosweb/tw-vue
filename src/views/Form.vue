<template>
    <div>
        <h1>Form</h1>
        <FormSelect />

        <TWFormFile />
    </div>
</template>

<script>
    import FormSelect from '@/FormSelect';
    import TWFormFile from '@/components/form-file/TWFormFile';

    export default {
        components: {
            TWFormFile,
            FormSelect,
        },
    };
</script>
