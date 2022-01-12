export default {
    base: 'rounded-md p-4 text-sm font-medium',
    baseButtonClose: 'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2',
    variants: {
        default: {
            base: 'bg-gray-50',
            text: 'text-gray-700',
            buttonClose: 'bg-gray-50 text-gray-500 hover:bg-gray-100 focus:ring-offset-gray-50 focus:ring-gray-600',
        },
        primary: {
            base: 'bg-blue-50',
            text: 'text-blue-800',
            buttonClose: 'bg-blue-50 text-blue-500 hover:bg-blue-100 focus:ring-offset-blue-50 focus:ring-blue-600',
        },
        secondary: {
            base: 'bg-gray-500',
            text: 'text-white',
            buttonClose: 'bg-gray-500 text-white hover:bg-gray-400 focus:ring-offset-gray-500 focus:ring-white',
        },
        success: {
            base: 'bg-green-50',
            text: 'text-green-800',
            buttonClose: 'bg-green-50 text-green-500 hover:bg-green-100 focus:ring-offset-green-50 focus:ring-green-600',
        },
        danger: {
            base: 'bg-red-50',
            text: 'text-red-800',
            buttonClose: 'bg-red-50 text-red-500 hover:bg-red-100 focus:ring-offset-red-50 focus:ring-red-600',
        },
        warning: {
            base: 'bg-yellow-50',
            text: 'text-yellow-800',
            buttonClose: 'bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:ring-offset-yellow-50 focus:ring-yellow-600',
        },
        info: {
            base: 'bg-cyan-50',
            text: 'text-cyan-800',
            buttonClose: 'bg-cyan-50 text-cyan-500 hover:bg-cyan-100 focus:ring-offset-cyan-50 focus:ring-cyan-600',
        },
        light: {
            base: 'bg-gray-50',
            text: 'text-gray-400',
            buttonClose: 'bg-gray-50 text-gray-400 hover:bg-gray-100 focus:ring-offset-gray-50 focus:ring-gray-400',
        },
        dark: {
            base: 'bg-gray-700',
            text: 'text-white',
            buttonClose: 'bg-gray-700 text-white hover:bg-gray-800 focus:ring-offset-gray-700 focus:ring-white',
        },
    },
};
