export default {
    defaultVariant: "primary",
    defaultSize: "md",
    fixed: {
        root: "relative flex items-start min-h-full bg-gray-400 rounded-full",
        percentage: "bg-blue-500 rounded-full",
        percentageText:
            "w-max h-max text-gray-100 font-semibold self-center absolute inset-x-2/4",
        tooltip:
            "w-max h-max absolute inset-x-2/4 ring-2 ring-offset-2 rounded-sm text-gray-800 font-bold "
    },
    variants: {
        primary: {
            root: "bg-blue-500 ",
            tooltip: 'ring-blue-400 ring-offset-blue-100 bg-blue-100'
        },
        secondary: {
            root: "bg-gray-500 ",
            tooltip: 'ring-gray-400 ring-offset-gray-100 bg-gray-100'
        },
        success: {
            root: "bg-green-500 ",
            tooltip: 'ring-green-400 ring-offset-green-100 bg-green-100'
        },
        danger: {
            root: "bg-red-500 ",
            tooltip: 'ring-red-400 ring-offset-red-100 bg-red-100'
        },
        warning: {
            root: "bg-yellow-500 ",
            tooltip: 'ring-yellow-400 ring-offset-yellow-100 bg-yellow-100'
        }
    },
    sizes: {
        sm: "text-xs h-4",
        md: "text-sm h-5",
        lg: "text-2xl h-7"
    }
};
