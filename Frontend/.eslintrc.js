module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    rules: {
        '@typescript-eslint/indent': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/no-mutable-exports': 0,
        'no-labels': 0,
        'no-restricted-syntax': 0,
    },
    plugins: ['@typescript-eslint', 'svelte3'],
    extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:@typescript-eslint/recommended', 'plugin:eslint-comments/recommended', 'plugin:promise/recommended', 'prettier'],
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3',
        },
        {
            files: ['*.ts', '*.tsx'], // Your TypeScript files extension
            parserOptions: {
                project: ['./tsconfig.json'], // Specify it only for TypeScript files
            },
        },
    ],
};
