module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    `react-app`,
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules
    "prettier/@typescript-eslint", // added prettier
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module",
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    } // Allows for the use of imports
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
  },
  settings: {
    react: {
      version: "detect" // automatically detect version of react
    }
  }
}