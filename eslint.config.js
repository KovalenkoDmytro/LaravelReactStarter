import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import tseslint from 'typescript-eslint';
import {fixupConfigRules} from "@eslint/compat";
import globals from "globals";


export default tseslint.config({
        files: ["resources/js/**/*.{js,jsx,ts,tsx}"],
        settings: {
            react: {
                version: "detect"
            }
        },
        languageOptions: {
            parser: tseslint.parser,
            ecmaVersion: 2022,
            globals: globals.browser,
            parserOptions: {ecmaFeatures: {jsx: true}}
        },
        extends: [
            pluginJs.configs.recommended,
            ...tseslint.configs.recommended,
            ...fixupConfigRules(pluginReactConfig),
        ],
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/jsx-uses-react": "off"
        }
    }
);
