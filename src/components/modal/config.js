export default {
    defaultSize: 'md',
    fixed: {
        root: 'fixed z-50 inset-0 overflow-y-auto',
        backdrop: 'absolute inset-0 bg-gray-900 opacity-75',
        wrap: 'inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle',
        title: 'text-lg leading-6 font-medium text-gray-900',
        header: 'bg-gray-50 py-3 px-6 flex items-center justify-between',
        body: 'bg-white p-6',
        footer: 'bg-gray-50 py-3 px-6 flex flex-col sm:flex-row sm:space-x-3 sm:justify-end',
        btnClose: 'text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-lg',
    },
    sizes: {
        sm: 'sm:w-full sm:max-w-sm',
        md: 'sm:w-full sm:max-w-xl',
        lg: 'sm:w-full sm:max-w-6xl',
        full: 'sm:w-full',
    },
};
