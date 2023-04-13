module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'eslint-config-import-sort'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', "simple-import-sort", "simple-import-sort"],
    rules: {
        'no-multiple-empty-lines': [1, { max: 1, maxEOF: 0 }],
        'no-console': [1, { allow: ['warn', 'error'] }],
        'no-unused-vars': [
            1,
            { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
        ],
        'no-unused-expressions': [
            2,
            {
                allowShortCircuit: true,
                allowTernary: true,
            },
        ],
        'prettier/prettier': 1,
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',
    },
};