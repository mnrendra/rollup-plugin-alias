# @mnrendra/rollup-plugin-alias
🍣 A [Rollup](https://rollupjs.org/) plugin to resolve alias paths and automatically read the alias configuration from `tsconfig.json`.

## Install
```bash
npm i -D rollup-plugin-esbuild @mnrendra/rollup-plugin-alias
```

## Usage
For **ES modules** (`rollup.config.mjs`):
```javascript
import esbuild from 'rollup-plugin-esbuild' // 'rollup-plugin-esbuild' is required
import alias from '@mnrendra/rollup-plugin-alias'

export default {
  external: (id) => !/^[./]/.test(id),
  input: 'your_input_file.(js|cjs|mjs|jsx|ts|cts|mts|tsx)',
  output: {
    file: 'dist/your_output_file.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    esbuild({ minify: true }), // <-- Require `esbuild` to be executed immediately before `alias`
    alias() // <-- Execute `alias` immediately after `esbuild`. It will automatically read the alias configuration from `tsconfig.json`.
  ]
}
```
For **CommonJS** (`rollup.config.js`):
```javascript
const esbuild = require('rollup-plugin-esbuild') // 'rollup-plugin-esbuild' is required
const alias = require('@mnrendra/rollup-plugin-alias')

module.exports = {
  external: (id) => !/^[./]/.test(id),
  input: 'your_input_file.(js|cjs|mjs|jsx|ts|cts|mts|tsx)',
  output: {
    file: 'dist/your_output_file.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    esbuild({ minify: true }), // <-- Require `esbuild` to be executed immediately before `alias`
    alias() // <-- Execute `alias` immediately after `esbuild`. It will automatically read the alias configuration from `tsconfig.json`.
  ]
}
```

## Options
```javascript
const alias = require('@mnrendra/rollup-plugin-alias')

module.exports = {
  plugins: [
    alias({
      aliases: [{ alias: '@', path: './src' }] // To override alias path configurations from `tsconfig.json`.
    })
  ]
}
```

### • `aliases`
*type: `Alias[]`*<br/>
A list of [alias](https://github.com/mnrendra/types-aliases) configs.

## Types
```typescript
import type {
  // @mnrendra/alias-resolver
  Alias,
  Aliases,
  // @mnrendra/rollup-plugin-alias
  Options,
  Plugin
} from '@mnrendra/rollup-plugin-alias'
```

## License
[MIT](https://github.com/mnrendra/rollup-plugin-alias/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
