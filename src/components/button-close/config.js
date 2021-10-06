export default {
    base: 'inline-flex p-1.5 focus:outline-none transition ease-in-out duration-150',
    variants: {
        default: 'text-gray-400 hover:text-gray-500',
        'default-rounded': 'text-gray-400 hover:text-gray-500 border border-gray-200 rounded-full p-3',
        primary: 'text-blue-400 hover:text-blue-500',
        'primary-rounded': 'text-blue-400 hover:text-blue-500 border border-blue-200 rounded-full p-3',
        danger: 'text-red-400 hover:text-red-500',
        'danger-rounded': 'text-red-400 hover:text-red-500 border border-red-200 rounded-full p-3',
        success: 'text-green-400 hover:text-green-500',
        'success-rounded': 'text-green-400 hover:text-green-500 border border-green-200 rounded-full p-3',
    },
    sizes: {
        xxs: 'w-3 h-3',
        xs: 'w-4 h-4',
        sm: 'w-5 h-5',
        md: 'w-6 h-6',
        lg: 'w-7 h-7',
    },
};
