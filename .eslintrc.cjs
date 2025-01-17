module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "indent": ['error', 2, { "SwitchCase": 1 }],
    "no-console": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/prefer-stateless-function": "off",
    "react/prefer-stateless-function": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/jsx-no-target-blank": "off",
    "react/jsx-max-props-per-line": [1, { "maximum": 4, }],
  },
}
