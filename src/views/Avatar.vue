<template>
    <div>
        <h3 class="text-xl font-medium mb-3">
            Avatars
        </h3>

        <div class="text-blue-500">
            <TWSpinner size="xl" />
        </div>

        <TWAvatar
            text="TM"
            size="xs"
        />
        <TWAvatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            size="sm"
        />
        <TWAvatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        <TWAvatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            size="lg"
        />
        <TWAvatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            size="xl"
        />
    </div>
</template>

<script>
    import TWAvatar from '@/components/avatar/TWAvatar';
    import TWSpinner from '@/components/spinner/TWSpinner';

    export default {
        name: 'Avatar',

        components: {
            TWAvatar,
            TWSpinner,
        },

        data() {
            return {
            };
        },

        methods: {},
    };
</script>
