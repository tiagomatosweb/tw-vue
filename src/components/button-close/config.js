export default {
    defaultVariant: 'primary',
    defaultSize: 'md',
    base: 'inline-flex items-center justify-center p-1.5 focus:outline-none transition ease-in-out duration-150',
    variants: {
        primary: {
            base: 'text-blue-500 hover:text-blue-600',
        },
        secondary: {
            base: 'text-gray-400 hover:text-gray-500',
        },
        danger: {
            base: 'text-red-400 hover:text-red-500',
        },
        success: {
            base: 'text-green-400 hover:text-green-500',
        },
        warning: {
            base: 'text-yellow-400 hover:text-yellow-500',
        },
    },
    sizes: {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
    },
};
