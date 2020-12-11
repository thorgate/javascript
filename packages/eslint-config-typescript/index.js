module.exports = {
    extends: [
        'react-app',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'airbnb/hooks',
        'prettier',
        'prettier/react',
        'plugin:jest/recommended',
        'prettier/@typescript-eslint',
    ],
    plugins: ['@typescript-eslint', 'jest', 'prettier'],
    env: {
        browser: true,
        'jest/globals': true,
    },
    globals: {
        DJ_CONST: false,
        django: false,
    },
    rules: {
        // Treat prettier issues as warnings
        'prettier/prettier': 'warn',

        // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
        'import/prefer-default-export': 'off',

        // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
        'react/jsx-filename-extension': 'off',

        'react/destructuring-assignment': 0,
        'react/jsx-one-expression-per-line': 0,

        // Set max line length to 140 chars. Prettier formats to 80.
        // Using this rule so comments would be kept in more readable format
        'max-len': ['warn', 140],

        // else-return improves readability sometimes, especially with one-liners.
        'no-else-return': 'warn',

        // Allow unary ++ operator in for loop afterthoughts
        'no-plusplus': 'off',

        // allow some underscore dangles
        'no-underscore-dangle': [
            'error',
            {
                allow: [
                    '__app_initialized__',
                    '__settings__',
                    '__initial_state__',
                    '__initial_i18n_store__',
                    '__initial_language__',
                    '__initial_ready__',
                    '__DEV__',
                    '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
                    '__SAGA_MONITOR_EXTENSION__',
                    '__VERSION__',
                ],
            },
        ],

        // Turn these into errors
        'no-var': 'error',

        // and these into warnings
        'jsx-a11y/no-static-element-interactions': 'warn',
        'jsx-a11y/label-has-associated-control': 'warn',
        'jsx-a11y/anchor-is-valid': [
            'error',
            { components: ['Link'], specialLink: ['to'] },
        ],
        'jsx-a11y/label-has-for': 'warn',

        // and disable these
        'class-methods-use-this': 'off',

        // Show TODOs and FIXMEs as warnings
        'no-warning-comments': ['warn', { location: 'anywhere' }],

        // Typescript configuration
        '@typescript-eslint/no-explicit-any': 'off', // warn
        '@typescript-eslint/explicit-module-boundary-types': 'off', // warn
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
    },
    overrides: [
        {
            // Allow import packages from devDependencies for `stories.js` file
            files: ['*.stories.tsx'],
            rules: {
                'import/no-extraneous-dependencies': [
                    'error',
                    { devDependencies: true },
                ],
            },
        },
    ],
};
