<template>
    <div
        id="app"
        class="container mx-auto my-5"
    >
        <div class="grid gap-8">
            <Badges />

            <Buttons />

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
    import Buttons from '@/Buttons';
    import Badges from '@/Badges';

    export default {
        name: "App",
        components: { Badges, TwLabel, TwDropdown, Buttons },
        data() {
            return {
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
