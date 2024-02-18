module.exports = {
    parser: '@typescript-eslint/parser', // Определяет парсер ESLint
    extends: [
      'plugin:@typescript-eslint/recommended', // Использует рекомендуемые правила из @typescript-eslint/eslint-plugin
    ],
    parserOptions: {
      ecmaVersion: 2020, // Разрешить синтаксис ES2020
      sourceType: 'module', // Разрешить использование модулей ES6
      ecmaFeatures: {
        jsx: true, // Разрешить JSX
      },
    },
    rules: {
        "@typescript-eslint/no-unnecessary-type-constraint": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/triple-slash-reference":"off",
        "@typescript-eslint/no-unused-vars":"off",
        "@typescript-eslint/ban-types":"off",

    },
    settings: {
      react: {
        version: 'detect', // Автоматически обнаруживает версию React
      },
    },
  };
  