export default {
    defaultVariant: 'primary',
    defaultSize: 'md',
    fixed: {
        root: 'inline-flex items-center justify-center rounded-full overflow-hidden',
    },
    variants: {
        primary: {
            root: 'text-blue-700 text-blue-700 bg-blue-100',
        },
        secondary: {
            root: 'text-gray-700 text-gray-700 bg-gray-100',
        },
        success: {
            root: 'text-green-700 text-green-700 bg-green-100',
        },
        danger: {
            root: 'text-red-700 text-red-700 bg-red-100',
        },
        warning: {
            root: 'text-yellow-700 text-yellow-700 bg-yellow-100',
        },
    },
    sizes: {
        xs: 'h-6 w-6 text-xs',
        sm: 'h-8 w-8 text-sm',
        md: 'h-10 w-10 text-root',
        lg: 'h-12 w-12 text-lg',
        xl: 'h-14 w-14 text-xl',
    },
};
