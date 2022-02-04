<template>
    <option :value="value">
        <slot />
    </option>
</template>

<script>
export default {
    name: 'TWFormSelectOption',
    props: {
        value: undefined,
    },
};
</script>
