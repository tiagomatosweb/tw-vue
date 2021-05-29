export default {
    base: 'inline-flex items-center font-medium',
    variants: {
        default: 'rounded-full bg-gray-100 text-gray-800',
        primary: 'rounded-full bg-blue-100 text-blue-800',
        secondary: 'rounded-full bg-gray-500 text-white',
        success: 'rounded-full bg-green-100 text-green-800',
        danger: 'rounded-full bg-red-100 text-red-800',
        warning: 'rounded-full bg-yellow-100 text-yellow-800',
        info: 'rounded-full bg-cyan-100 text-cyan-800',
        // light: 'rounded-full bg-gray-100 text-gray-800',
        dark: 'rounded-full bg-gray-700 text-white',
    },
    sizes: {
        xs: 'text-xs px-2.5 py-1.5 rounded',
        sm: 'text-sm px-3 py-2 leading-4 rounded',
        md: 'px-2.5 py-0.5 text-xs',
        lg: 'text-base px-4 py-2 rounded',
        xl: 'text-base px-6 py-3 rounded',
        '2xl': 'text-xl px-8 py-3 rounded',
    },
};
