<template>
    <div>
        <RouterLink
            v-for="nav in menu"
            :key="nav.label"
            :to="nav.to"
            :active-class="nav.to.name === $route.name ? 'font-bold' : null"
        >
            {{ nav.label }}
        </RouterLink>

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
                    { label: 'Form', to: '/documentation/form'  },
                    { label: 'Help text', to: '/documentation/help-text'  },
                    { label: 'Tag', to: '/documentation/tag'  },
                ],
            };
        },

        methods: {},
    };
</script>
