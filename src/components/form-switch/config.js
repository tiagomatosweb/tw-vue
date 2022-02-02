export default {
    defaultVariant: 'primary',
    defaultSize: 'md',
    base: 'relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none',
    baseHandler: 'pointer-events-none inline-block rounded-full shadow transform ring-0 transition ease-in-out duration-200',
    variants: {
        primary: {
            base: {
                enabled: 'bg-blue-600',
                disabled: 'bg-gray-200',
            },
            handler: {
                enabled: 'bg-white',
                disabled: 'bg-white',
            },
        },
        secondary: {
            base: {
                enabled: 'bg-gray-400',
                disabled: 'bg-gray-200',
            },
            handler: {
                enabled: 'bg-white',
                disabled: 'bg-white',
            },
        },
        success: {
            base: {
                enabled: 'bg-green-500',
                disabled: 'bg-gray-200',
            },
            handler: {
                enabled: 'bg-white',
                disabled: 'bg-white',
            },
        },
        danger: {
            base: {
                enabled: 'bg-red-500',
                disabled: 'bg-gray-200',
            },
            handler: {
                enabled: 'bg-white',
                disabled: 'bg-white',
            },
        },
        warning: {
            base: {
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
            base: 'h-5 w-9',
            handler: 'h-4 w-4',
        },
        md: {
            base: 'h-6 w-11',
            handler: 'h-5 w-5',
        },
        lg: {
            base: 'h-8 w-15',
            handler: 'h-7 w-7',
        },
    },
};
