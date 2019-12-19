## My settings

**Terminal Font**

Meslo LG MDZ for PowerLine

**NPM Global**
- express-generator
- live-server
- nodemon
- npm-check-updates

**Eslint, Prettier, Husky, Lint-Staged**

From your command line, install these dev-dependencies:

```bash
# Yarn
$ yarn add --dev eslint-config-prettier eslint-plugin-prettier husky lint-staged prettier

# NPM
$ npm i -D eslint-config-prettier eslint-plugin-prettier husky lint-staged prettier
```

On package.json place this:

```json
  "eslintConfig": {
    "extends": [
      "react-app", // remove if not apply
      "plugin:prettier/recommended"
    ]
  },
  "prettier": {
    "printWidth": 90,
    "bracketSpacing": true,
    "trailingComma": "es5",
    "tabWidth": 2,
    "semi": true,
    "singleQuote": true,
    "jsxSingleQuote": false
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.+(js|jsx)": [
      "eslint --fix",
      "git add"
    ],
    "*.+(json|css|md)": [
      "prettier --write",
      "git add"
    ]
  },
```
