module.exports = {
    root: true,
    plugins: ['@typescript-eslint'],

    extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:jsdoc/recommended',
        'prettier',
    ],

    rules: {
        'import/prefer-default-export': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_[^_].*$|^_$',
                varsIgnorePattern: '^_[^_].*$|^_$',
                caughtErrorsIgnorePattern: '^_[^_].*$|^_$',
            },
        ],
        'no-param-reassign': ['error', { props: false }],
        'class-methods-use-this': 'off',
        'no-plusplus': 'off',
        'no-new': 'off',
        'max-len': ['error', 120],
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-returns-type': 'off',
        'import/no-unresolved': 'off',
    },

    parser: '@typescript-eslint/parser',

    parserOptions: {
        project: ['./tsconfig.json'],
    },

    env: {
        node: true,
    },
}
