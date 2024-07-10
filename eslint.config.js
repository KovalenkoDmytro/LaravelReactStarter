import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import {fixupConfigRules} from "@eslint/compat";

export default [
    {
        files: ["resources/js/**/*.{js,jsx,ts,tsx}"],
        ...pluginJs.configs.recommended,
    },
    {

        settings: {
            react: {
                version: "detect"
            }
        }
    },
    {
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {jsx: true}
            },
            globals: globals.browser,
        }
    },
    ...fixupConfigRules(pluginReactConfig),

    {
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/jsx-uses-react": "off"
        }
    }
];
