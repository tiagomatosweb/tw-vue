module.exports = {
    root: true,
    env: {
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    settings: {
        'import/resolver': 'webpack',
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/strongly-recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'semi': ['error', 'always'],
        'space-before-function-paren': ['error', 'never'],
        'vue/html-indent': ['error', 4],
        'vue/no-v-html': 'off',
        'vue/script-indent': ['error', 4, {
            baseIndent: 1,
            switchCase: 1,
        }],
        'vue/component-name-in-template-casing': ['error', 'PascalCase', {
            'ignores': ['/^c1-/'],
            'registeredComponentsOnly': false,
        }],
        'vue/match-component-file-name': ['error', {
            'extensions': ['vue'],
            'shouldMatchCase': false
        }],
        'import/no-absolute-path': 'error',
        'import/newline-after-import': 'error',
        'import/no-unresolved': ['error']
    }
};
