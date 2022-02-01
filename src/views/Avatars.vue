<template>
    <div>
        <h3 class="text-xl font-medium mb-3">
            Avatars
        </h3>

        <div>
            <TWAvatar
                text="TW"
                size="xs"
            />
            <TWAvatar
                variant="secondary"
                text="TW"
                size="sm"
            />
            <TWAvatar
                variant="danger"
                text="TW"
                size="md"
            />
            <TWAvatar
                variant="success"
                text="TW"
                size="lg"
            />
            <TWAvatar
                variant="warning"
                text="TW"
                size="xl"
            />
        </div>

        <div>
            <TWAvatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                size="xs"
            />
            <TWAvatar
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                size="sm"
            />
            <TWAvatar
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                size="md"
            />
            <TWAvatar
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                size="lg"
            />
            <TWAvatar
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                size="xl"
            />
        </div>
    </div>
</template>

<script>
    import TWAvatar from '@/components/avatar/Avatar';

    export default {
        components: {
            TWAvatar,
        },

        data() {
            return {
            };
        },

        methods: {},
    };
</script>
