// eslint.config.mjs
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import playwright from 'eslint-plugin-playwright';

export default [
    js.configs.recommended,

    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                sourceType: 'module',
                ecmaVersion: 'latest',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
        },
        rules: {
            ...tseslint.configs.recommended.rules,
            '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
            '@typescript-eslint/no-unused-vars': ['warn'],
            '@typescript-eslint/explicit-function-return-type': 'off',
        },
    },

    {
        files: ['tests/**/*.ts'],
        plugins: {
            playwright,
        },
        rules: {
            ...playwright.configs.recommended.rules,
        },
    },
];
