import pluginJs from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxAlly from "eslint-plugin-jsx-a11y";

export default [
  //1. Global Ignores (apply to the entire project, first object is usually the best)
  { ignores: ["node_modules/", "dist/", ".vite/", "build/"] },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],

    //Global variables availabe in your code (e.g.,browser-specific ones like window,document)
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true, //Enable JSX parsing
        },
      },
      globals: {
        ...globals.browser, //Include browser-specifi global variables
        //If you also have Node.js cod. you might add: ...globals.node
      },
    },

    //Explicityle declare the plugins you're using.
    //This makes it clear which plugin are active for this config.
    plugins: {
      js: pluginJs, // While `pluginJs.configs.recommended` includes this, explicit is clear.
      react: pluginReact,
      "react-hooks": pluginReactHooks, //Register the React Hooks plugin
      "jsx-a11y": pluginJsxAlly,
    },

    //Settings for plugins, particularly important for 'eslint-plugin-react'
    settings: {
      react: {
        version: "detect",
      },
      jsx: {
        runtime: "automatic",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".mjs"], // Add file extensions your project uses
        },
        // If you use path aliases in Vite, you might need to add a resolver here.
        // For example, if you use `resolve.alias` in vite.config.js like:
        // alias: { '@/': path.resolve(__dirname, 'src/') }
        // You would need `eslint-import-resolver-alias` or `eslint-import-resolver-vite`
        // See the "Advanced" section below for more details.
      },
    },

    //Define you linting rules. Order matters here if rules conflict.
    rules: {
      //Apply recommended rules from core Eslint(javascript)
      ...pluginJs.configs.recommended.rules,

      //Apply recommend rules from eslint-plugin-react
      ...pluginReact.configs.recommended.rules,

      ...pluginReactHooks.configs.recommended.rules,

      ...pluginJsxAlly.configs.recommended.rules, //Apply Recommended a11y rules
      //-- Custom overrides and Specific Rules --
      //These will override any conflicting rules from the "recommended" sets above.

      //Turn off urles related to the old JSX transform
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",

      //your preference rules:
      "no-unused-vars": "warn", //warn about unused variables
      "no-undef": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }], //warn about console.log but allow .warn and .error
    },
  },
];
