const colors = require('tailwindcss/colors');

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
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
    ],
};
