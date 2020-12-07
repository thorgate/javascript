module.exports = {
    trailingComma: 'es5',
    printWidth: 80,
    singleQuote: true,
    jsxSingleQuote: false,
    endOfLine: 'lf',
    tabWidth: 4,
    semi: true,
    overrides: [
        {
            files: '*.ts',
            options: {
                parser: 'typescript',
            },
        },
        {
            files: '*.tsx',
            options: {
                parser: 'typescript',
            },
        },
    ],
};
