export default {
    defaultVariant: 'secondary',
    base: 'w-full shadow-lg rounded-lg',
    baseBody: 'p-6',
    variants: {
        primary: {
            base: 'text-white bg-blue-500',
        },
        secondary: {
            base: 'text-gray-700 bg-gray-50',
        },
        success: {
            base: 'text-white bg-green-500',
        },
        danger: {
            base: 'text-white bg-red-500',
        },
        warning: {
            base: 'text-yellow-900 bg-yellow-400',
        },
    },
};
