export default {
    defaultVariant: 'primary',
    defaultSize: 'sm',
    base: 'inline-flex items-center font-medium rounded-full px-2.5 py-0.5',
    baseButtonClose: 'rounded-full inline-flex items-center justify-center focus:outline-none',
    variants: {
        primary: {
            base: 'bg-blue-100 text-blue-700',
            buttonClose: 'text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:bg-blue-500 focus:text-white',
        },
        secondary: {
            base: 'bg-gray-100 text-gray-700',
            buttonClose: 'text-gray-400 hover:bg-gray-200 hover:text-gray-500 focus:bg-gray-500 focus:text-white',
        },
        success: {
            base: 'bg-green-100 text-green-700',
            buttonClose: 'text-green-400 hover:bg-green-200 hover:text-green-500 focus:bg-green-500 focus:text-white',
        },
        danger: {
            base: 'bg-red-100 text-red-700',
            buttonClose: 'text-red-400 hover:bg-red-200 hover:text-red-500 focus:bg-red-500 focus:text-white',
        },
        warning: {
            base: 'bg-yellow-100 text-yellow-700',
            buttonClose: 'text-yellow-400 hover:bg-yellow-200 hover:text-yellow-500 focus:bg-yellow-500 focus:text-white',
        },
    },
    sizes: {
        sm: 'text-xs',
        lg: 'text-sm',
    },
};
