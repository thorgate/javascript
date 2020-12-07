# Prettier config

Prettier configuration using following defaults:
- `trailingComma = es5`
- `printWidth = 80`
- `singleQuote = true`
- `jsxSingleQuote = false`
- `endOfLine = lf`
- `tabWidth = 4`
- `semi = true`

Overrides are used for settings parsers for
 - `*.ts` and `*.tsx` for TypeScript files

### Overriding

To override settings from this config .js config file is required to be used.

For example `prettier.config.js` or `.prettierrc.js`

```js
module.exports = {
  ...require("@thorgate/prettier-config"),
  semi: false,
}
```
