module.exports = {
    extends: [
        'react-app',
        'airbnb',
        'airbnb/hooks',
        'prettier',
        'plugin:jest/recommended',
    ],
    plugins: ['jest', 'prettier'],
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

        // We allow single named export as well
        'import/prefer-default-export': 0,

        // JSX files use .js extension
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx'] },
        ],

        // Warnings when not destructuring props assignment
        'react/destructuring-assignment': [
            'warn',
            'always',
            { ignoreClassFields: true },
        ],
        'react/jsx-one-expression-per-line': 0,

        // Set max line length to 140 chars. Prettier formats to 80.
        // Using this rule so comments would be kept in more readable format
        'max-len': ['warn', 140],

        // else-return improves readability sometimes, especially with one-liners.
        'no-else-return': 'warn',

        // Allow unary ++ operator in for loop afterthoughts
        'no-plusplus': 'off',

        // don't enforce the style of function components
        'react/function-component-definition': 'off',

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
        'no-unused-vars': [
            'error',
            { argsIgnorePattern: '_[0-9]*', varsIgnorePattern: '_[0-9]*' },
        ],
        'no-var': 'error',

        // Turn these into errors
        'class-methods-use-this': 'warn',
        'jsx-a11y/no-static-element-interactions': 'warn',
        'jsx-a11y/label-has-associated-control': 'warn',
        'jsx-a11y/label-has-for': 'warn',

        // Show TODOs and FIXMEs as warnings
        'no-warning-comments': ['warn', { location: 'anywhere' }],
    },
};
