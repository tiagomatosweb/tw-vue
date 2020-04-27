module.exports = {
    // add your custom config here
    // https://stylelint.io/user-guide/configuration
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-scss',
    ],

    plugins: [
        'stylelint-order',
    ],

    rules: {
        indentation: 4,
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['v-deep'],
            },
        ],
        'order/order': [
            [
                'custom-properties',
                'declarations',
            ],
        ],
        'order/properties-alphabetical-order': true,
    },
};
