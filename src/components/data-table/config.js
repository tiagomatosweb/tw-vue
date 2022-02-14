export default {
    defaultVariant: "primary",
    defaultSize: "md",
    fixed: {
        root: "m-3 overflow-hidden overflow-x-auto",
        containerFilter: "flex flex-col items-start gap-1 md:flex-row md:justify-between md:items-center mb-2",
        containerFilterDropInput: "flex justify-start items-center gap-2",
        containerSelect: "text-gray-600 py-1 px-2 w-16 rounded-sm border focus:outline-none focus:ring-0",
        containerInput: "text-gray-600 py-1 px-2 rounded-sm border focus:outline-none focus:ring-0",
        containerTable:"border bg-opacity-50 min-w-full table-auto",
        continerTr:"p-2",
        containerTh:"py-3 px-6 font-medium tracking-wider text-left  uppercase",
        containerThDiv:"flex justify-between items-center font-semibold",
        containerTrBody:"border-b border-gray-600 text-left",
        containerTdBody:"py-4 px-6 text-sm text-gray-600 whitespace-nowrap",
        routLink:"font-semibold bg-opacity-0",
        containerPagination:"flex justify-between items-center mt-1",
        paginationInfo:"text-sm text-gray-600",
        paginationUl:"flex justify-start items-center gap-[2px]",
        paginationLi:"py-1 overflow-hidden rounded-sm border",
        paginationLiPag:"py-1 overflow-hidden rounded-sm border",
    
    },
    variants: {
        primary:{
            root:"bg-blue-100 text-blue-700 border-blue-300",
            pagination:"bg-white border-blue-300 text-blue-700",
            active:"bg-blue-100",
            input:"border-blue-300 focus:border-blue-500"
        },
        secondary:{
            root:"bg-gray-100 text-gray-700 border-gray-300",
            pagination:"bg-white border-gray-300 text-gray-700",
            active:"bg-gray-100",
            input:"border-gray-300 focus:border-gray-500"
        },
        success:{
            root:"bg-green-100 text-green-700 border-green-300",
            pagination:"bg-white border-green-300 text-green-700",
            active:"bg-green-100",
            input:"border-green-300 focus:border-green-500"
        },
        danger:{
            root:"bg-red-100 text-red-700 border-red-300",
            pagination:"bg-white border-red-300 text-red-700",
            active:"bg-red-100",
            input:"border-red-300 focus:border-red-500"
        },
        warning: {
            root:"bg-yellow-100 text-yellow-700 border-yellow-300",
            pagination:"bg-white border-yellow-300 text-yellow-700",
            active:"bg-yellow-100",
            input:"border-yellow-300 focus:border-yellow-500"
        },
    },
    sizes: {
        xs:"text-xs",
        sm:"text-sm",
        md: "text-md",
        lg: "text-lg",
    }
};
