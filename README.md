## My settings

**Terminal Font**

Meslo LG MDZ for PowerLine

**NPM Global**
- express-generator
- live-server
- nodemon
- npm-check-updates

**Husky and Lint-Staged**

From your command line, install these dev-dependencies:

```bash
# Yarn
$ yarn add --dev husky lint-staged prettier eslint eslint-config-prettier eslint-plugin-prettier eslint-config-node eslint-plugin-node

# NPM
$ npm i -D prettier husky lint-staged eslint eslint-config-prettier eslint-plugin-prettier eslint-config-node eslint-plugin-node

#Finally
$ npx install-peerdeps --dev eslint-config-airbnb
```

On package.json place this:

```json
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
