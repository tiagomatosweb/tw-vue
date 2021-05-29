export default {
    base: 'inline-flex items-center justify-center border border-transparent focus:outline-none transition ease-in-out duration-150',
    variants: {
        default: 'text-gray-700 bg-gray-100 hover:bg-gray-200',
        naked: 'text-gray-700',
        primary: 'text-white bg-blue-500 hover:bg-blue-600',
        secondary: 'text-white bg-gray-500 hover:bg-gray-600',
        success: 'text-white bg-green-600 hover:bg-green-700',
        danger: 'text-white bg-red-500 hover:bg-red-600',
        warning: 'text-yellow-900 bg-yellow-400 hover:bg-yellow-500',
        info: 'text-white bg-cyan-500 hover:bg-cyan-600',
        light: 'text-gray-400 bg-gray-50 hover:bg-gray-100 border-gray-300',
        dark: 'text-white bg-gray-700 hover:bg-gray-900',
    },
    sizes: {
        xs: 'text-xs px-2.5 py-1.5 rounded',
        sm: 'text-sm px-3 py-2 leading-4 rounded',
        md: 'text-sm px-4 py-2 rounded',
        lg: 'text-base px-4 py-2 rounded',
        xl: 'text-base px-6 py-3 rounded',
        '2xl': 'text-xl px-8 py-3 rounded',
    },
};
