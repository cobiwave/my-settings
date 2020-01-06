module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    "import/no-extraneous-dependencies": "off",
    "prettier/prettier": "error",
    "no-console": "warn",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-filename-extension": "off", // disable if necessary
    "react/static-property-placement": "off", // disable if necessary
    "react/jsx-props-no-spreading": "off", // disable if necessary
    "react/require-default-props": "off",
  },
  parser: "babel-eslint",
}
