const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        colors: {
            black: '#000',
            white: '#fff',
            blue: colors.blue,
            'blue-gray': colors.blueGray,
            green: colors.green,
            red: colors.rose,
            yellow: colors.yellow,
            cyan: colors.cyan,
            indigo: colors.indigo,
        },
        borderColor: theme => ({
            ...theme('colors'),
            transparent: 'transparent',
        }),

        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
    ],
};
