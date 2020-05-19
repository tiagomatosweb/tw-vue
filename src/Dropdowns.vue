<template>
    <div>
        <h3 class="text-lg font-bold mb-2">
            Dropdowns
        </h3>

        <div class="grid gap-4">
            <div>
                <TwDropdown
                    :options="options"
                    rounded
                    size="sm"
                    text="Dropdown small"
                    label="label"
                    class="mr-1"
                    @select="onDropdownSelect"
                />

                <TwDropdown
                    :options="options2"
                    text="Dropdown"
                    class="mx-1"
                    @select="onDropdownSelect"
                />

                <TwDropdown
                    :options="options"
                    rounded
                    text="Dropdown"
                    label="label"
                    class="mx-1"
                    @select="onDropdownSelect"
                />

                <TwDropdown
                    :options="options"
                    rounded
                    naked
                    text="Dropdown naked"
                    label="label"
                    class="mx-1"
                    @select="onDropdownSelect"
                />

                <TwDropdown
                    :options="options"
                    rounded
                    no-icon
                    text="Dropdown naked"
                    label="label"
                    class="mx-1"
                    @select="onDropdownSelect"
                />

                <TwDropdown
                    :options="options"
                    rounded
                    label="label"
                    class="mx-1"
                    @select="onDropdownSelect"
                >
                    <template v-slot:button-content>
                        Custom icon
                    </template>

                    <template v-slot:button-icon>
                        <svg
                            class="h-4 w-4 -mr-1 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                                stroke="#4A5568"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                stroke="#4A5568"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </template>
                </TwDropdown>

                <TwDropdown
                    rounded
                    label="label"
                    text="Custom menu"
                    class="mx-1"
                    @select="onDropdownSelect"
                >
                    <TwDropdownItem>
                        <svg
                            class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path
                                fill-rule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        Editar
                    </TwDropdownItem>
                    <TwDropdownItem>
                        <svg
                            class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        Deletar
                    </TwDropdownItem>

                    <TwDropdownDivider />

                    <TwDropdownItem>
                        <svg
                            class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        Logout
                    </TwDropdownItem>
                </TwDropdown>

                <TwDropdown
                    :options="options"
                    no-padding
                    naked
                    class="mx-1"
                    @select="onDropdownSelect"
                >
                    <template v-slot:button-icon>
                        <svg
                            class="h-4 w-4 -mr-1 ml-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                    </template>
                </TwDropdown>
            </div>
        </div>
    </div>
</template>

<script>
    import TwDropdown from '@/components/TwDropdown';
    import TwDropdownItem from '@/components/TwDropdownItem';
    import TwDropdownDivider from '@/components/TwDropdownDivider';

    export default {
        name: 'Dropdowns',

        components: {
            TwDropdownDivider,
            TwDropdownItem,
            TwDropdown,
        },

        data() {
            return {
                selectedOption: {},
                options: [
                    { label: 'Option 1' },
                    { label: 'Option 2' },
                    { label: 'Option 3' },
                ],

                options2: ['Option 1', 'Option 2', 'Option 3'],
            };
        },

        methods: {
            onDropdownSelect(opt) {
                this.selectedOption = opt;
            },

            click() {
                alert('here');
            },
        },
    };
</script>
