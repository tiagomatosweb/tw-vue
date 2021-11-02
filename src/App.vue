<template>
    <div
        id="app"
        class="p-10"
    >
        <TWToggle />

        <div
            id="nav"
            class="mb-10"
        >
            <RouterLink to="/">
                Home
            </RouterLink>

            <RouterLink :to="{ name: 'button' }">
                Button
            </RouterLink>

            <RouterLink :to="{ name: 'pagination' }">
                Pagination
            </RouterLink>

            <RouterLink :to="{ name: 'form' }">
                Form
            </RouterLink>

            <RouterLink :to="{ name: 'alert' }">
                Alert
            </RouterLink>

            <RouterLink :to="{ name: 'avatar' }">
                Avatar
            </RouterLink>

            <RouterLink :to="{ name: 'slideOvers' }">
                Slide over
            </RouterLink>
        </div>

        <RouterView />
    </div>
</template>

<script>
    import TWToggle from '@/components/toggle/TWToggle';

    export default {
        components: { TWToggle },
    };
</script>
