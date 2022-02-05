export default {
    defaultVariant: 'primary',
    defaultSize: 'md',
    fixed: {
        root: 'relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none',
        handler: 'pointer-events-none inline-block rounded-full shadow transform ring-0 transition ease-in-out duration-200',
    },
    variants: {
        primary: {
            root: {
                enabled: 'bg-blue-600',
                disabled: 'bg-gray-200',
            },
            handler: {
                enabled: 'bg-white',
                disabled: 'bg-white',
            },
        },
        secondary: {
            root: {
                enabled: 'bg-gray-400',
                disabled: 'bg-gray-200',
            },
            handler: {
                enabled: 'bg-white',
                disabled: 'bg-white',
            },
        },
        success: {
            root: {
                enabled: 'bg-green-500',
                disabled: 'bg-gray-200',
            },
            handler: {
                enabled: 'bg-white',
                disabled: 'bg-white',
            },
        },
        danger: {
            root: {
                enabled: 'bg-red-500',
                disabled: 'bg-gray-200',
            },
            handler: {
                enabled: 'bg-white',
                disabled: 'bg-white',
            },
        },
        warning: {
            root: {
                enabled: 'bg-yellow-500',
                disabled: 'bg-gray-200',
            },
            handler: {
                enabled: 'bg-white',
                disabled: 'bg-white',
            },
        },
    },
    sizes: {
        sm: {
            root: 'h-5 w-9',
            handler: 'h-4 w-4',
        },
        md: {
            root: 'h-6 w-11',
            handler: 'h-5 w-5',
        },
        lg: {
            root: 'h-8 w-15',
            handler: 'h-7 w-7',
        },
    },
};
