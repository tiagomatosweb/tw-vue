<template>
    <div>
        <div class="space-x-4 text-sm">
            <RouterLink
                v-for="nav in menu"
                :key="nav.label"
                :to="nav.to"
                class="border-b-2 p-1"
                :class="{
                    'font-medium border-blue-600': nav.to === $route.fullPath,
                    'border-white': nav.to !== $route.fullPath,
                }"
            >
                {{ nav.label }}
            </RouterLink>
        </div>

        <br><br>

        <RouterView />
    </div>
</template>

<script>
    export default {
        name: 'Documentation',

        data() {
            return {
                menu: [
                    { label: 'Alert', to: '/documentation/alert' },
                    { label: 'Avatar', to: '/documentation/avatar' },
                    { label: 'Button', to: '/documentation/button' },
                    { label: 'Button close', to: '/documentation/button-close' },
                    { label: 'Card', to: '/documentation/card' },
                    { label: 'Drawer', to: '/documentation/drawer' },
                    { label: 'Form', to: '/documentation/form' },
                    { label: 'Help text', to: '/documentation/help-text' },
                    { label: 'Modal', to: '/documentation/modal' },
                    { label: 'Spinner', to: '/documentation/spinner' },
                    { label: 'Tab', to: '/documentation/tab' },
                    { label: 'Tag', to: '/documentation/tag' },
                ],
            };
        },
    };
</script>
