export default {
    defaultVariant: 'primary',
    base: 'rounded-xl p-4 text-sm mb-4',
    baseButtonClose: 'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2',
    variants: {
        primary: {
            base: 'text-blue-700 text-blue-700 bg-blue-100',
            buttonClose: 'bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200',
        },
        secondary: {
            base: 'text-gray-700 text-gray-700 bg-gray-100',
            buttonClose: 'bg-gray-100 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200',
        },
        success: {
            base: 'text-green-700 text-green-700 bg-green-100',
            buttonClose: 'bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200',
        },
        danger: {
            base: 'text-red-700 text-red-700 bg-red-100',
            buttonClose: 'bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200',
        },
        warning: {
            base: 'text-yellow-700 text-yellow-700 bg-yellow-100',
            buttonClose: 'bg-yellow-100 text-yellow-600 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200',
        },
    },
};
