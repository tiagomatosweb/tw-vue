<template>
    <div>
        <h3 class="text-lg font-bold mb-2">
            Badges
        </h3>

        <div class="grid gap-4">
            <div
                v-for="(badge, index) in badges"
                :key="index"
            >
                <TwBadge
                    v-for="(b, idx) in badge"
                    :key="idx"
                    :theme="b.theme"
                    :color="b.color"
                    :pill="b.pill"
                    :size="b.size"
                    :class="b.class"
                >
                    Badge
                </TwBadge>
            </div>
        </div>
    </div>
</template>

<script>
    import TwBadge from '@/components/TwBadge';

    export default {
        name: 'Badges',

        components: {
            TwBadge,
        },

        data() {
            return {
                badges: [
                    [
                        { size: 'sm', theme: 'light', color: 'gray', pill: false, class: null },
                        { size: 'sm', theme: 'light', color: 'cool-gray', pill: false, class: 'mx-1' },
                        { size: 'sm', theme: 'light', color: 'red', pill: false, class: 'mx-1' },
                        { size: 'sm', theme: 'light', color: 'orange', pill: false, class: 'mx-1' },
                        { size: 'sm', theme: 'light', color: 'yellow', pill: false, class: 'mx-1' },
                        { size: 'sm', theme: 'light', color: 'green', pill: false, class: 'mx-1' },
                        { size: 'sm', theme: 'light', color: 'teal', pill: false, class: 'mx-1' },
                        { size: 'sm', theme: 'light', color: 'indigo', pill: false, class: 'mx-1' },
                        { size: 'sm', theme: 'light', color: 'blue', pill: false, class: 'mx-1' },
                        { size: 'sm', theme: 'light', color: 'purple', pill: false, class: 'mx-1' },
                        { size: 'sm', theme: 'light', color: 'pink', pill: false, class: 'mx-1' },
                    ],
                    [
                        { size: 'sm', theme: 'dark', color: 'gray', pill: false, class: null },
                        { size: 'sm', theme: 'dark', color: 'cool-gray', pill: false, class: 'mx-1' },
                        { size: 'sm', theme: 'dark', color: 'red', pill: false, class: 'mx-1' },
                        { size: 'sm', theme: 'dark', color: 'orange', pill: false, class: 'mx-1' },
                        { size: 'sm', theme: 'dark', color: 'yellow', pill: false, class: 'mx-1' },
                        { size: 'sm', theme: 'dark', color: 'green', pill: false, class: 'mx-1' },
                        { size: 'sm', theme: 'dark', color: 'teal', pill: false, class: 'mx-1' },
                        { size: 'sm', theme: 'dark', color: 'indigo', pill: false, class: 'mx-1' },
                        { size: 'sm', theme: 'dark', color: 'blue', pill: false, class: 'mx-1' },
                        { size: 'sm', theme: 'dark', color: 'purple', pill: false, class: 'mx-1' },
                        { size: 'sm', theme: 'dark', color: 'pink', pill: false, class: 'mx-1' },
                    ],
                    [
                        { size: 'sm', theme: 'light', color: 'gray', pill: true, class: null },
                        { size: 'sm', theme: 'light', color: 'cool-gray', pill: true, class: 'mx-1' },
                        { size: 'sm', theme: 'light', color: 'red', pill: true, class: 'mx-1' },
                        { size: 'sm', theme: 'light', color: 'orange', pill: true, class: 'mx-1' },
                        { size: 'sm', theme: 'light', color: 'yellow', pill: true, class: 'mx-1' },
                        { size: 'sm', theme: 'light', color: 'green', pill: true, class: 'mx-1' },
                        { size: 'sm', theme: 'light', color: 'teal', pill: true, class: 'mx-1' },
                        { size: 'sm', theme: 'light', color: 'indigo', pill: true, class: 'mx-1' },
                        { size: 'sm', theme: 'light', color: 'blue', pill: true, class: 'mx-1' },
                        { size: 'sm', theme: 'light', color: 'purple', pill: true, class: 'mx-1' },
                        { size: 'sm', theme: 'light', color: 'pink', pill: true, class: 'mx-1' },
                    ],
                    [
                        { size: 'sm', theme: 'dark', color: 'gray', pill: true, class: null },
                        { size: 'sm', theme: 'dark', color: 'cool-gray', pill: true, class: 'mx-1' },
                        { size: 'sm', theme: 'dark', color: 'red', pill: true, class: 'mx-1' },
                        { size: 'sm', theme: 'dark', color: 'orange', pill: true, class: 'mx-1' },
                        { size: 'sm', theme: 'dark', color: 'yellow', pill: true, class: 'mx-1' },
                        { size: 'sm', theme: 'dark', color: 'green', pill: true, class: 'mx-1' },
                        { size: 'sm', theme: 'dark', color: 'teal', pill: true, class: 'mx-1' },
                        { size: 'sm', theme: 'dark', color: 'indigo', pill: true, class: 'mx-1' },
                        { size: 'sm', theme: 'dark', color: 'blue', pill: true, class: 'mx-1' },
                        { size: 'sm', theme: 'dark', color: 'purple', pill: true, class: 'mx-1' },
                        { size: 'sm', theme: 'dark', color: 'pink', pill: true, class: 'mx-1' },
                    ],
                    [
                        { size: 'md', theme: 'light', color: 'gray', pill: false, class: null },
                        { size: 'md', theme: 'light', color: 'cool-gray', pill: false, class: 'mx-1' },
                        { size: 'md', theme: 'light', color: 'red', pill: false, class: 'mx-1' },
                        { size: 'md', theme: 'light', color: 'orange', pill: false, class: 'mx-1' },
                        { size: 'md', theme: 'light', color: 'yellow', pill: false, class: 'mx-1' },
                        { size: 'md', theme: 'light', color: 'green', pill: false, class: 'mx-1' },
                        { size: 'md', theme: 'light', color: 'teal', pill: false, class: 'mx-1' },
                        { size: 'md', theme: 'light', color: 'indigo', pill: false, class: 'mx-1' },
                        { size: 'md', theme: 'light', color: 'blue', pill: false, class: 'mx-1' },
                        { size: 'md', theme: 'light', color: 'purple', pill: false, class: 'mx-1' },
                        { size: 'md', theme: 'light', color: 'pink', pill: false, class: 'mx-1' },
                    ],
                    [
                        { size: 'md', theme: 'dark', color: 'gray', pill: false, class: null },
                        { size: 'md', theme: 'dark', color: 'cool-gray', pill: false, class: 'mx-1' },
                        { size: 'md', theme: 'dark', color: 'red', pill: false, class: 'mx-1' },
                        { size: 'md', theme: 'dark', color: 'orange', pill: false, class: 'mx-1' },
                        { size: 'md', theme: 'dark', color: 'yellow', pill: false, class: 'mx-1' },
                        { size: 'md', theme: 'dark', color: 'green', pill: false, class: 'mx-1' },
                        { size: 'md', theme: 'dark', color: 'teal', pill: false, class: 'mx-1' },
                        { size: 'md', theme: 'dark', color: 'indigo', pill: false, class: 'mx-1' },
                        { size: 'md', theme: 'dark', color: 'blue', pill: false, class: 'mx-1' },
                        { size: 'md', theme: 'dark', color: 'purple', pill: false, class: 'mx-1' },
                        { size: 'md', theme: 'dark', color: 'pink', pill: false, class: 'mx-1' },
                    ],
                    [
                        { size: 'md', theme: 'light', color: 'gray', pill: true, class: null },
                        { size: 'md', theme: 'light', color: 'cool-gray', pill: true, class: 'mx-1' },
                        { size: 'md', theme: 'light', color: 'red', pill: true, class: 'mx-1' },
                        { size: 'md', theme: 'light', color: 'orange', pill: true, class: 'mx-1' },
                        { size: 'md', theme: 'light', color: 'yellow', pill: true, class: 'mx-1' },
                        { size: 'md', theme: 'light', color: 'green', pill: true, class: 'mx-1' },
                        { size: 'md', theme: 'light', color: 'teal', pill: true, class: 'mx-1' },
                        { size: 'md', theme: 'light', color: 'indigo', pill: true, class: 'mx-1' },
                        { size: 'md', theme: 'light', color: 'blue', pill: true, class: 'mx-1' },
                        { size: 'md', theme: 'light', color: 'purple', pill: true, class: 'mx-1' },
                        { size: 'md', theme: 'light', color: 'pink', pill: true, class: 'mx-1' },
                    ],
                    [
                        { size: 'md', theme: 'dark', color: 'gray', pill: true, class: null },
                        { size: 'md', theme: 'dark', color: 'cool-gray', pill: true, class: 'mx-1' },
                        { size: 'md', theme: 'dark', color: 'red', pill: true, class: 'mx-1' },
                        { size: 'md', theme: 'dark', color: 'orange', pill: true, class: 'mx-1' },
                        { size: 'md', theme: 'dark', color: 'yellow', pill: true, class: 'mx-1' },
                        { size: 'md', theme: 'dark', color: 'green', pill: true, class: 'mx-1' },
                        { size: 'md', theme: 'dark', color: 'teal', pill: true, class: 'mx-1' },
                        { size: 'md', theme: 'dark', color: 'indigo', pill: true, class: 'mx-1' },
                        { size: 'md', theme: 'dark', color: 'blue', pill: true, class: 'mx-1' },
                        { size: 'md', theme: 'dark', color: 'purple', pill: true, class: 'mx-1' },
                        { size: 'md', theme: 'dark', color: 'pink', pill: true, class: 'mx-1' },
                    ],
                    [
                        { size: 'lg', theme: 'light', color: 'gray', pill: false, class: null },
                        { size: 'lg', theme: 'light', color: 'cool-gray', pill: false, class: 'mx-1' },
                        { size: 'lg', theme: 'light', color: 'red', pill: false, class: 'mx-1' },
                        { size: 'lg', theme: 'light',  color: 'orange', pill: false, class: 'mx-1' },
                        { size: 'lg', theme: 'light',  color: 'yellow', pill: false, class: 'mx-1' },
                        { size: 'lg', theme: 'light',  color: 'green', pill: false, class: 'mx-1' },
                        { size: 'lg', theme: 'light',  color: 'teal', pill: false, class: 'mx-1' },
                        { size: 'lg', theme: 'light',  color: 'indigo', pill: false, class: 'mx-1' },
                        { size: 'lg', theme: 'light',  color: 'blue', pill: false, class: 'mx-1' },
                        { size: 'lg', theme: 'light',  color: 'purple', pill: false, class: 'mx-1' },
                        { size: 'lg', theme: 'light',  color: 'pink', pill: false, class: 'mx-1' },
                    ],
                    [
                        { size: 'lg', theme: 'dark', color: 'gray', pill: false, class: null },
                        { size: 'lg', theme: 'dark', color: 'cool-gray', pill: false, class: 'mx-1' },
                        { size: 'lg', theme: 'dark', color: 'red', pill: false, class: 'mx-1' },
                        { size: 'lg', theme: 'dark',  color: 'orange', pill: false, class: 'mx-1' },
                        { size: 'lg', theme: 'dark',  color: 'yellow', pill: false, class: 'mx-1' },
                        { size: 'lg', theme: 'dark',  color: 'green', pill: false, class: 'mx-1' },
                        { size: 'lg', theme: 'dark',  color: 'teal', pill: false, class: 'mx-1' },
                        { size: 'lg', theme: 'dark',  color: 'indigo', pill: false, class: 'mx-1' },
                        { size: 'lg', theme: 'dark',  color: 'blue', pill: false, class: 'mx-1' },
                        { size: 'lg', theme: 'dark',  color: 'purple', pill: false, class: 'mx-1' },
                        { size: 'lg', theme: 'dark',  color: 'pink', pill: false, class: 'mx-1' },
                    ],
                    [
                        { size: 'lg', theme: 'light',  color: 'gray', pill: true, class: null },
                        { size: 'lg', theme: 'light',  color: 'cool-gray', pill: true, class: 'mx-1' },
                        { size: 'lg', theme: 'light',  color: 'red', pill: true, class: 'mx-1' },
                        { size: 'lg', theme: 'light',  color: 'orange', pill: true, class: 'mx-1' },
                        { size: 'lg', theme: 'light',  color: 'yellow', pill: true, class: 'mx-1' },
                        { size: 'lg', theme: 'light',  color: 'green', pill: true, class: 'mx-1' },
                        { size: 'lg', theme: 'light',  color: 'teal', pill: true, class: 'mx-1' },
                        { size: 'lg', theme: 'light',  color: 'indigo', pill: true, class: 'mx-1' },
                        { size: 'lg', theme: 'light',  color: 'blue', pill: true, class: 'mx-1' },
                        { size: 'lg', theme: 'light',  color: 'purple', pill: true, class: 'mx-1' },
                        { size: 'lg', theme: 'light',  color: 'pink', pill: true, class: 'mx-1' },
                    ],
                    [
                        { size: 'lg', theme: 'dark',  color: 'gray', pill: true, class: null },
                        { size: 'lg', theme: 'dark',  color: 'cool-gray', pill: true, class: 'mx-1' },
                        { size: 'lg', theme: 'dark',  color: 'red', pill: true, class: 'mx-1' },
                        { size: 'lg', theme: 'dark',  color: 'orange', pill: true, class: 'mx-1' },
                        { size: 'lg', theme: 'dark',  color: 'yellow', pill: true, class: 'mx-1' },
                        { size: 'lg', theme: 'dark',  color: 'green', pill: true, class: 'mx-1' },
                        { size: 'lg', theme: 'dark',  color: 'teal', pill: true, class: 'mx-1' },
                        { size: 'lg', theme: 'dark',  color: 'indigo', pill: true, class: 'mx-1' },
                        { size: 'lg', theme: 'dark',  color: 'blue', pill: true, class: 'mx-1' },
                        { size: 'lg', theme: 'dark',  color: 'purple', pill: true, class: 'mx-1' },
                        { size: 'lg', theme: 'dark',  color: 'pink', pill: true, class: 'mx-1' },
                    ],
                ],
            };
        },

        methods: {},
    };
</script>
