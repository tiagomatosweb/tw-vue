<template>
    <div id="app">
        <div
            id="nav"
            class="mb-10 bg-gray-100"
        >
            <div class="container mx-auto p-4 space-x-3">
                <RouterLink to="/">
                    Home
                </RouterLink>

                <RouterLink
                    :to="{ name: 'alert' }"
                    active-class="font-bold text-blue-400"
                >
                    Alert
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
        </div>

        <div class="container mx-auto p-4">
            <RouterView />
        </div>
    </div>
</template>

<script>

</script>
