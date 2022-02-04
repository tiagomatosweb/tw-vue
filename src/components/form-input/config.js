export default {
    defaultVariation: 'primary',
    defaultSize: 'md',
    base: 'block w-full transition ease-in-out focus:outline-none shadow-sm duration-150 disabled:bg-gray-100',
    variants: {
        primary: {
            base: 'text-gray-800 bg-white placeholder-gray-400 border border-gray-300 focus:border-blue-300 focus:ring focus:ring-opacity-50 focus:ring-blue-200',
        },
        success: {
            base: 'text-gray-800 bg-white placeholder-gray-400 border border-green-500 focus:border-green-500 focus:ring focus:ring-opacity-50 focus:ring-green-200',
        },
        danger: {
            base: 'text-gray-800 bg-white placeholder-gray-400 border border-red-500 focus:border-red-500 focus:ring focus:ring-opacity-50 focus:ring-red-200',
        },
        warning: {
            base: 'text-gray-800 bg-white placeholder-gray-400 border border-yellow-500 focus:border-yellow-500 focus:ring focus:ring-opacity-50 focus:ring-yellow-200',
        },
    },
    sizes: {
        sm: 'text-sm px-3 py-2 leading-4 rounded',
        md: 'text-sm px-4 py-2 rounded',
        lg: 'text-base px-4 py-3 rounded',
    },
};
