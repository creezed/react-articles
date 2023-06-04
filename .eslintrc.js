/** Разрешенные импорты (для сортировки) */
const ALLOWED_PATH_GROUPS = [
  '@/pages/**',
  '@/features/**',
  '@/entities/**',
  '@/shared/**',
].map(pattern => ({
  pattern,
  group: 'internal',
  position: 'after',
}));

/** Для запрета приватных путей */
const DENIED_PATH_GROUPS = [
  // Private imports are prohibited, use public imports instead
  'app/**',
  'pages/*/**',
  'features/*/**',
  'entities/*/**',
  'shared/*/*/**', // Для shared +1 уровень, т.к. там чаще мы обращаемся к конкретной библиотеке/компоненты
  // Prefer absolute imports instead of relatives (for root modules)
  '../**/app',
  '../**/pages',
  '../**/features',
  '../**/entities',
  '../**/shared',
];

module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'prettier',
    'import',
    '@typescript-eslint',
    '@typescript-eslint/eslint-plugin',
  ],
  root: true,
  rules: {
    'no-param-reassign': 0,
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'warn',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/require-default-props': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/order': [
      2,
      {
        pathGroups: ALLOWED_PATH_GROUPS,
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
    'no-restricted-imports': [
      2,
      {
        patterns: DENIED_PATH_GROUPS,
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    project: 'tsconfig-eslint.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['config/**/*.ts'],
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
    },
  ],
};
