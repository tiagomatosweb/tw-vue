export default {
    base: 'block w-full transition ease-in-out duration-150',
    variants: {
        default: 'text-gray-800 bg-white placeholder-gray-300 border border-gray-300 focus:border-blue-300 focus:ring focus:ring-opacity-50 focus:ring-blue-200 shadow-sm ',
        naked: 'text-gray-800  bg-white placeholder-gray-300 border border-transparent bg-transparent focus:outline-none focus:border-transparent focus:ring-0',
        success: 'text-gray-800 bg-white placeholder-gray-300 border border-green-500 focus:border-green-500 focus:ring focus:ring-opacity-50 focus:ring-green-200 shadow-sm ',
        danger: 'text-gray-800 bg-white placeholder-gray-300 border border-red-500 focus:border-red-500 focus:ring focus:ring-opacity-50 focus:ring-red-200 shadow-sm ',
        warning: 'text-gray-800 bg-white placeholder-gray-300 border border-yellow-500 focus:border-yellow-500 focus:ring focus:ring-opacity-50 focus:ring-yellow-200 shadow-sm ',
        info: 'text-gray-800 bg-white placeholder-gray-300 border border-cyan-500 focus:border-cyan-500 focus:ring focus:ring-opacity-50 focus:ring-cyan-200 shadow-sm ',
    },
    disabled: 'text-gray-400 border border-gray-200 focus:border-gray-200 bg-gray-100 shadow-sm ',
    readonly: 'text-gray-800 border border-gray-300 focus:border-gray-300 shadow-sm ',
    sizes: {
        xs: 'text-xs px-2.5 py-1.5 text-xs rounded',
        sm: 'text-sm px-3 py-2 leading-4 rounded',
        md: 'text-sm px-4 py-2 rounded',
        lg: 'text-base px-4 py-2 rounded',
        xl: 'text-base px-4 py-3 rounded',
        '2xl': 'text-2xl px-4 py-3 rounded',
    },
};
