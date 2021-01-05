module.exports = {
    pluginOptions: {
        lintStyleOnBuild: true,
        stylelint: {
            fix: false,
        },
    },

    // configureWebpack: {
    //     externals: {
    //         'portal-vue': 'portal-vue',
            // 'lodash': 'lodash',
            // '@popperjs': '@popperjs',
        // },
    // },

    // chainWebpack: config => {
    //     config.externals({
    //         'portal-vue': 'portal-vue',
    //     })
    // }
};
