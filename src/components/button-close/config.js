export default {
    defaultVariant: 'primary',
    defaultSize: 'md',
    fixed: {
        root: 'inline-flex items-center justify-center p-1 rounded-lg focus:outline-none focus:outline-none focus:ring-2 focus:ring-offset-2',
    },
    variants: {
        primary: {
            root: 'text-blue-500 hover:text-blue-600',
        },
        secondary: {
            root: 'text-gray-400 hover:text-gray-500',
        },
        danger: {
            root: 'text-red-400 hover:text-red-500',
        },
        success: {
            root: 'text-green-400 hover:text-green-500',
        },
        warning: {
            root: 'text-yellow-400 hover:text-yellow-500',
        },
    },
    sizes: {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
    },
};
