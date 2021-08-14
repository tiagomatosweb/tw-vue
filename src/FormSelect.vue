<template>
    <div>
        <TWFormSelect
            v-model="array"
            :options="[{ value: { id: 1, name: 'Jose' }, text: 'Option 1', ranking: 1, }, { value: { id: 2, name: 'Jose' }, text: 'Option 2', ranking: 2, }]"
        />

        <br>

        <TWFormSelect
            v-model="string"
            :options="['Option1', 'Option2']"
        />

        <br>

        <TWFormSelect
            v-model="boolean"
            :options="[true, false]"
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
                string: null,
                boolean: true,
            };
        },

        methods: {},
    };
</script>
