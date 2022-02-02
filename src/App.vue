<template>
    <div id="app">
        <div
            id="nav"
            class="mb-10 bg-gray-100"
        >
            <div class="container mx-auto p-4 space-x-3">
                <RouterLink
                    v-for="nav in menu"
                    :key="nav.label"
                    :to="nav.to"
                    :active-class="nav.to.name === $route.name ? 'font-bold' : null"
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
                    { label: 'Alerts', to: { name: 'alerts' } },
                    { label: 'Avatars', to: { name: 'avatars' } },
                    { label: 'Buttons', to: { name: 'buttons' } },
                    { label: 'Form switch', to: { name: 'form-switch' } },
                    { label: 'Tags', to: { name: 'tags' } },
                ],
            };
        },
    };
</script>
