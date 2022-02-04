<template>
    <div id="app">
        <div class="mb-10 bg-gray-100">
            <div class="container mx-auto p-4 space-x-3">
                <RouterLink
                    v-for="nav in menu"
                    :key="nav.label"
                    :to="nav.to"
                >
                    {{ nav.label }}
                </RouterLink>
            </div>
        </div>

        <div class="container mx-auto p-4">
            <RouterView />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menu: [
                    { label: 'Home', to: '/' },
                    { label: 'Documentation', to: '/documentation' },
                ],
            };
        },
    };
</script>
