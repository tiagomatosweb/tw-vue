<template>
    <div>
        <h3 class="text-xl font-medium mb-3">
            Form input
        </h3>

        <div class="grid gap-2">
            <TWFormInput />
            <TWFormInput variant="naked" />
            <TWFormInput variant="success" />
            <TWFormInput variant="danger" />
            <TWFormInput variant="warning" />
            <TWFormInput variant="info" />
        </div>

        <hr class="border-blue-gray-200 my-8">

        <h4 class="text-base mb-2">
            Sizes
        </h4>

        <div class="grid gap-2">
            <TWFormInput
                placeholder="Text input xs"
                size="xs"
            />

            <TWFormInput
                placeholder="Text input sm"
                size="sm"
            />

            <TWFormInput
                placeholder="Text input md"
            />

            <TWFormInput
                placeholder="Text input lg"
                size="lg"
            />

            <TWFormInput
                placeholder="Text input xl"
                size="xl"
            />

            <TWFormInput
                placeholder="Text input 2xl"
                size="2xl"
            />
        </div>

        <hr class="border-blue-gray-200 my-8">

        <h4 class="text-base mb-2">
            Disable
        </h4>

        <TWFormInput
            v-model="input"
            disabled
        />

        <hr class="border-blue-gray-200 my-8">

        <h4 class="text-base mb-2">
            Readonly
        </h4>

        <TWFormInput
            v-model="input"
            readonly
        />

        <h4 class="text-base mb-2">
            Group
        </h4>

        <div class="grid gap-4">
            <TWFormGroup
                label="Form group"
                label-for="formGroup"
                invalid-feedback="This is an error message"
            >
                <TWFormInput
                    id="formGroup1"
                    variant="danger"
                    placeholder="This in part of form group"
                />
            </TWFormGroup>

            <TWFormGroup
                label="Form group"
                label-for="formGroup2"
                invalid-feedback="This is an error message"
            >
                <TWFormInput
                    id="formGroup"
                    variant="danger"
                    placeholder="This in part of form group"
                />
            </TWFormGroup>
        </div>

        <h4 class="text-base mb-2">
            Select
        </h4>

        {{ select }}

        <TWFormSelect
            v-model="select"
            :options="[{ text: 'Select', value: null }, { text: 'Game of Thrones', value: { id: 1, name: 'game'} }, { text: 'Transformers', value: { id: 2, name: 'trans'} }]"
            @change="selected"
        />

        <h4 class="text-base mb-2">
            Textarea
        </h4>

        <TWFormTextarea />
    </div>
</template>

<script>
    import TWFormInput from '@/components/form-input/TWFormInput';
    import TWFormGroup from '@/components/form-group/TWFormGroup';
    import TWFormSelect from '@/components/form-select/TWFormSelect';
    import TWFormTextarea from '@/components/form-textarea/TWFormTextarea';

    export default {
        name: 'Inputs',

        components: {
            TWFormSelect,
            TWFormGroup,
            TWFormInput,
            TWFormTextarea,
        },

        data() {
            return {
                input: 'Text input',
                select: null,
            };
        },

        methods: {
            selected(vl) {
                console.log(vl);
            },
        },
    };
</script>
