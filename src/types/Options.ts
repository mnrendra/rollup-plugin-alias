import type { Aliases } from '@mnrendra/alias-resolver'

/**
 * `rollup-plugin-alias` options interface.
 *
 * @see https://github.com/mnrendra/rollup-plugin-alias#readme
 */
interface Options {
  /**
   * List of alias configs.
   *
   * @see https://github.com/mnrendra/rollup-plugin-alias#readme
   */
  aliases?: Aliases
}

export default Options