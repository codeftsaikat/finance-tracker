// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import tseslint from 'typescript-eslint'

// export default tseslint.config(
//   { ignores: ['dist'] },
//   {
//     extends: [js.configs.recommended, ...tseslint.configs.recommended],
//     files: ['**/*.{ts,tsx}'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//     plugins: {
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true },
//       ],
//     },
//   },
// )

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { configs as tsConfigs } from '@typescript-eslint/eslint-plugin'; // Correct import for TypeScript ESLint

export default [
  {
    ignores: ['dist'], // Specify files/folders to ignore
  },
  {
    files: ['**/*.{ts,tsx}'], // Apply this configuration to TypeScript files
    languageOptions: {
      ecmaVersion: 2020, // ECMAScript version
      globals: globals.browser, // Use browser globals
    },
    extends: [
      js.configs.recommended, // JavaScript recommended rules
      ...tsConfigs.recommended, // TypeScript recommended rules
    ],
    plugins: {
      'react-hooks': reactHooks, // Add React Hooks plugin
      'react-refresh': reactRefresh, // Add React Refresh plugin
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // Add React Hooks recommended rules
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // React Refresh rule configuration
      ],
    },
  },
];
