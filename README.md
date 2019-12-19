## My settings

**Terminal Font**
- Meslo LG MDZ for PowerLine

**NPM Global**
- express-generator
- live-server
- nodemon
- npm-check-updates

**Eslint, Prettier, Husky**
- package.json
```json
  "eslintConfig": {
    "extends": [
      "react-app",
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
