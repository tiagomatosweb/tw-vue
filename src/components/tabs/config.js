export default {
    defaultVariant: 'primary',
    base: '',
    variants: {
        primary: {
            base: '',
            navWrap: 'border-b border-gray-200',
            baseNav: '-mb-px flex space-x-8',
            baseLink: 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
            activeLink: 'border-blue-500 text-blue-600',
            inactiveLink: 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300',
        },
        secondary: {
            base: '',
            navWrap: 'bg-gray-300 rounded-lg p-2',
            baseNav: 'flex space-x-3',
            baseLink: 'whitespace-nowrap py-1 px-2 font-medium text-sm rounded-md',
            activeLink: 'border-gray-500 text-gray-600 bg-white',
            inactiveLink: 'text-gray-400 border-transparent hover:text-gray-700 hover:border-gray-300',
        },
    },
};
