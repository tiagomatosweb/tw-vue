module.exports = {
    theme: {
        extend: {
            fontSize: {
                xxs: '0.625rem',
            },
        },
    },
    variants: {
        gap: ['responsive', 'hover'],
    },
    plugins: [
        require('@tailwindcss/ui'),
    ],
};
