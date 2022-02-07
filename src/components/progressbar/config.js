export default {
    defaultVariant: "primary",
    defaultSize: "md",
    fixed: {
        root: "shadow bg-gray-200 mt-2 rounded-full",
        percentage: "leading-none py-1 flex justify-center items-center rounded-full relative",
        tooltipContainer:
            "w-max flex flex-col justify-center align-center",
        percentageText: "text-white font-semibold text-center",
        tooltip:
            "my-2 p-2 shadow text-center text-black rounded-full font-bold "
    },
    variants: {
        primary: {
            root: "bg-blue-500 ",
            tooltip: 'text-blue-700  bg-blue-200'
        },
        secondary: {
            root: "bg-gray-500 ",
            tooltip: 'text-gray-700 bg-gray-200'
        },
        success: {
            root: "bg-green-500 ",
            tooltip: 'text-green-700 bg-green-200'
        },
        danger: {
            root: "bg-red-500 ",
            tooltip: 'text-red-700 bg-red-200'
        },
        warning: {
            root: "bg-yellow-500 ",
            tooltip: 'text-yellow-700 bg-yellow-200'
        }
    },
    sizes: {
        sm: {
            text: "text-xs",
            bar: "h-4",
            tooltip: "10"
        },
        md: {
            text: "text-sm",
            bar: "h-5",
            tooltip: "11"
        },
        lg: {
            text: "text-2xl",
            bar: "h-7",
            tooltip: "14"
        }
    }
};
