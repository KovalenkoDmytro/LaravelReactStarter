import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import {fixupConfigRules} from '@eslint/compat';


export default [
    {
        files: ['**/*.{js,ts,jsx,tsx}'],
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                ecmaFeatures: {jsx: true}
            }
        },
        plugins: {
            ...pluginJs.configs.recommended,
        },
        rules : {
            'indent' : [
                'error', 4
            ],
            'linebreak-style' : [
                'error', 'unix'
            ],
            'quotes' : [
                'error', 'single'
            ],

        }
    },

    ...tseslint.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
];
