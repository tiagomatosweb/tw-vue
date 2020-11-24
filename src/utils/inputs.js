export default {
    base: 'block w-full shadow-sm transition ease-in-out duration-150',
    variants: {
        default: 'text-blue-gray-800 border-blue-gray-300 focus:border-blue-300 focus:ring focus:ring-opacity-50 focus:ring-blue-200',
        success: 'text-blue-gray-800 border-green-500 focus:border-green-500 focus:ring focus:ring-opacity-50 focus:ring-green-200',
        danger: 'text-blue-gray-800 border-red-500 focus:border-red-500 focus:ring focus:ring-opacity-50 focus:ring-red-200',
        warning: 'text-blue-gray-800 border-yellow-500 focus:border-yellow-500 focus:ring focus:ring-opacity-50 focus:ring-yellow-200',
        info: 'text-blue-gray-800 border-cyan-500 focus:border-cyan-500 focus:ring focus:ring-opacity-50 focus:ring-cyan-200',
    },
    disabled: 'text-blue-gray-400 border-blue-gray-200 focus:border-blue-gray-200 bg-blue-gray-100',
    readonly: 'text-blue-gray-800 border-blue-gray-300 focus:border-blue-gray-300',
    sizes: {
        xs: 'text-xs px-2.5 py-1.5 text-xs rounded',
        sm: 'text-sm px-3 py-2 leading-4 rounded-md',
        md: 'text-sm px-4 py-2 rounded-md',
        lg: 'text-base px-4 py-2 rounded-md',
        xl: 'text-base px-4 py-3 rounded-md',
        '2xl': 'text-2xl px-4 py-3 rounded-md',
    },
};
