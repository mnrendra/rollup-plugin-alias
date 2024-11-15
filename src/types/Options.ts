import type { Aliases } from '@mnrendra/alias-resolver'
import type { CompilerOptions } from '@mnrendra/tsconfig-alias-parser'

/**
 * The options interface.
 *
 * @see https://github.com/mnrendra/rollup-plugin-alias#readme
 */
interface Options {
  /**
   * List of [alias](https://github.com/mnrendra/types-aliases#readme) configs to
   * override alias path configurations from `tsconfig.json` or
   * `compilerOptions` option.
   *
   * @default []
   *
   * @see https://github.com/mnrendra/rollup-plugin-alias#readme
   */
  aliases?: Aliases

  /**
   * `tsconfig.json`'s
   * [compilerOptions](https://github.com/mnrendra/types-tsconfig#readme)
   * contains `baseUrl` and `paths` properties to override alias path
   * configurations from `tsconfig.json`.
   *
   * *Note: it will be overridden by the `aliases` option if it exists.
   *
   * @default undefined
   *
   * @see https://github.com/mnrendra/rollup-plugin-alias#readme
   */
  compilerOptions?: CompilerOptions
}

export default Options
