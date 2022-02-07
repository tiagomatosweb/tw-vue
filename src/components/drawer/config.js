export default {
    defaultVariant: 'secondary',
    fixed: {
        root: 'w-full shadow-lg rounded-lg',
        body: 'p-6',
    },
    variants: {
        primary: {
            root: 'text-white bg-blue-500',
            body: '',
        },
        secondary: {
            root: 'text-gray-700 bg-gray-50',
            body: '',
        },
        success: {
            root: 'text-white bg-green-500',
            body: '',
        },
        danger: {
            root: 'text-white bg-red-500',
            body: '',
        },
        warning: {
            root: 'text-yellow-900 bg-yellow-400',
            body: '',
        },
    },
};
