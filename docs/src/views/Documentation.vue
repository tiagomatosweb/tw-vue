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
                    { label: 'Button close', to: '/documentation/button-close'  },
                    { label: 'Card', to: '/documentation/card'  },
                    { label: 'Form', to: '/documentation/form'  },
                    { label: 'Help text', to: '/documentation/help-text'  },
                    { label: 'Tag', to: '/documentation/tag'  },
                ],
            };
        },
    };
</script>
