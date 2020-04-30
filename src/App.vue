<template>
    <div
        id="app"
        class="container mx-auto my-5"
    >
        <div class="grid gap-8">
            <div>
                <TwLabel>Badge</TwLabel>
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

            <div>
                <TwLabel>Dropdown</TwLabel>
                <div>
                    <TwDropdown
                        :options="options"
                        rounded
                        size="sm"
                        text="Dropdown small"
                        class="mr-3"
                        @select="onDropdownSelect"
                    />

                    <TwDropdown
                        :options="options"
                        rounded
                        text="Dropdown"
                        @select="onDropdownSelect"
                    />
                </div>

                <div>
                    <TwDropdown
                        :options="options"
                        rounded
                        size="sm"
                        text="Dropdown small"
                        class="mr-3"
                        @select="onDropdownSelect"
                    />

                    <TwDropdown
                        :options="options"
                        rounded
                        text="Dropdown"
                        @select="onDropdownSelect"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TwDropdown from './components/TwDropdown';
    import TwLabel from '@/components/TwLabel';
    import TwBadge from '@/components/TwBadge';

    export default {
        name: "App",
        components: { TwBadge, TwLabel, TwDropdown },
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
                options: [
                    { id: 1, label: 'Option 1' },
                    { id: 2, label: 'Option 2' },
                    { id: 3, label: 'Option 3' },
                ],
            };
        },

        methods: {
            onDropdownSelect(opt) {
                console.log(opt);
            },
        },
    };
</script>
