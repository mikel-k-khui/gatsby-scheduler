module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'react-app',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules
    'prettier/@typescript-eslint', // added prettier
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    }, // Allows for the use of imports
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'import/no-webpack-loader-syntax': [0],
    // "graphql/template-strings": [
    //   `error`,
    //   {
    //     env: `relay`,
    //     tagName: `graphql`,
    //   },
    // ],
    '@typescript-eslint/ban-ts-comment': 'warn',
    'react/prop-types': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/jsx-pascal-case': `off`, // Prevents errors with Theme-UI and Styled component
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    'jsx-a11y/accessible-emoji': `warn`,
    'jsx-a11y/alt-text': `warn`,
    'jsx-a11y/anchor-has-content': `warn`,
    'jsx-a11y/anchor-is-valid': `warn`,
    'jsx-a11y/aria-activedescendant-has-tabindex': `warn`,
    'jsx-a11y/aria-props': `warn`,
    'jsx-a11y/aria-proptypes': `warn`,
    'jsx-a11y/aria-role': `warn`,
    'jsx-a11y/aria-unsupported-elements': `warn`,
    // TODO: It looks like the `autocomplete-valid` rule hasn't been published yet
    // "jsx-a11y/autocomplete-valid": [
    //   "warn",
    //   {
    //     inputComponents: [],
    //   },
    // ],
    'jsx-a11y/click-events-have-key-events': `warn`,
    'jsx-a11y/control-has-associated-label': `warn`,
    'jsx-a11y/heading-has-content': `warn`,
    'jsx-a11y/html-has-lang': `warn`,
    'jsx-a11y/iframe-has-title': `warn`,
    'jsx-a11y/img-redundant-alt': `warn`,
    'jsx-a11y/interactive-supports-focus': `warn`,
    'jsx-a11y/label-has-associated-control': `warn`,
    'jsx-a11y/lang': `warn`,
    'jsx-a11y/media-has-caption': `warn`,
    'jsx-a11y/mouse-events-have-key-events': `warn`,
    'jsx-a11y/no-access-key': `warn`,
    'jsx-a11y/no-autofocus': `warn`,
    'jsx-a11y/no-distracting-elements': `warn`,
    'jsx-a11y/no-interactive-element-to-noninteractive-role': `warn`,
    'jsx-a11y/no-noninteractive-element-interactions': `warn`,
    'jsx-a11y/no-noninteractive-element-to-interactive-role': `warn`,
    'jsx-a11y/no-noninteractive-tabindex': `warn`,
    'jsx-a11y/no-onchange': `warn`,
    'jsx-a11y/no-redundant-roles': `warn`,
    'jsx-a11y/no-static-element-interactions': `warn`,
    'jsx-a11y/role-has-required-aria-props': `warn`,
    'jsx-a11y/role-supports-aria-props': `warn`,
    'jsx-a11y/scope': `warn`,
    'jsx-a11y/tabindex-no-positive': `warn`,
  },
  settings: {
    react: {
      version: 'detect', // automatically detect version of react
    },
  },
}
