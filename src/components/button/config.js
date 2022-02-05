export default {
    defaultVariant: 'primary',
    defaultSize: 'md',
    fixed: {
        root: 'inline-flex items-center justify-center border focus:outline-none transition ease-in-out rounded-lg duration-150',
    },
    variants: {
        ghost: {
            root: 'text-gray-700 bg-white hover:bg-white border-white hover:border-white',
        },
        primary: {
            root: 'text-white bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600',
        },
        primaryOutline: {
            root: 'text-blue-500 hover:text-blue-600 border-blue-500 hover:border-blue-600',
        },
        secondary: {
            root: 'text-gray-700 bg-white hover:bg-gray-50 border-gray-300 hover:border-gray-400',
        },
        secondaryOutline: {
            root: 'text-gray-500 hover:text-gray-600 border-gray-500 hover:border-gray-600',
        },
        success: {
            root: 'text-white bg-green-500 hover:bg-green-600 border-green-500 hover:border-green-600',
        },
        successOutline: {
            root: 'text-green-500 hover:text-green-600 border-green-500 hover:border-green-600',
        },
        danger: {
            root: 'text-white bg-red-500 hover:bg-red-600 border-red-500 hover:border-red-600',
        },
        dangerOutline: {
            root: 'text-red-500 hover:text-red-600 border-red-500 hover:border-red-600',
        },
        warning: {
            root: 'text-yellow-900 bg-yellow-400 hover:bg-yellow-500 border-yellow-400 hover:border-yellow-500',
        },
        warningOutline: {
            root: 'text-yellow-500 hover:text-yellow-600 border-yellow-500 hover:border-yellow-600',
        },
    },
    sizes: {
        xs: 'text-xs px-2.5 py-1.5',
        sm: 'text-sm px-3 py-2 leading-4',
        md: 'text-sm px-4 py-2',
        lg: 'text-root px-4 py-2',
        xl: 'text-root px-6 py-3',
    },
};
