const path = require('path');

module.exports = {
    pages: {
        index: {
            entry: 'docs/src/main.js',
            template: 'docs/public/index.html',
        },
    },

    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'docs/src'),
            },
        },
    },
};
