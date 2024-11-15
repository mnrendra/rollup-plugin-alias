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
      // List of alias configs to override alias path configurations from `tsconfig.json` or `compilerOptions` option.
      aliases: [{
        alias: '@',
        path: './src'
      }],
      // `tsconfig.json`'s `compilerOptions` contains `baseUrl` and `paths` properties to override alias path configurations from `tsconfig.json`.
      // Note: it will be overridden by the `aliases` option if it exists.
      compilerOptions: {
        baseUrl: './src',
        paths: {
          '@': ['./'],
          '@/*': ['./*']
        }
      }
    })
  ]
}
```

### • `aliases`
*type: `Alias[]|undefined`*<br/>
*default: `[]`*<br/>
List of [alias](https://github.com/mnrendra/types-aliases#readme) configs to override alias path configurations from `tsconfig.json` or `compilerOptions` option.
### • `compilerOptions`
*type: `CompilerOptions|undefined`*<br/>
*default: `undefined`*<br/>
`tsconfig.json`'s [compilerOptions](https://github.com/mnrendra/types-tsconfig#readme) contains `baseUrl` and `paths` properties to override alias path configurations from `tsconfig.json`.<br>
*Note: it will be overridden by the `aliases` option if it exists.*

## Types
```typescript
import type {
  // @mnrendra/types-aliases
  Alias,
  Aliases,
  // @mnrendra/types-tsconfig
  CompilerOptions,
  BaseURL,
  Paths,
  // @mnrendra/rollup-plugin-alias
  Options,
  Plugin
} from '@mnrendra/rollup-plugin-alias'
```

## License
[MIT](https://github.com/mnrendra/rollup-plugin-alias/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
