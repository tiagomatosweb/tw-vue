<template>
    <div>
        {{ string }}
        <TWFormSelect
            v-model="string"
            :options="[{ name: 'Option 3', options: [
                { value: 2, name: 'Sub Option 3.1' },
                { value: 3, name: 'Sub Option 3.2' },
            ] }]"
            text-field="name"
        />

        <br>

        {{ boolean }}
        <TWFormSelect
            v-model="boolean"
            :options="[
                { text: 'Sim', value: 1 },
                { text: 'Não', value: 0 },
            ]"
        />
    </div>
</template>

<script>
    import TWFormSelect from '@/components/form-select/TWFormSelect';

    export default {
        name: 'FormSelect',

        components: {
            TWFormSelect,
        },

        data() {
            return {
                array: null,
                string: 3,
                boolean: 1,
            };
        },

        methods: {},
    };
</script>
