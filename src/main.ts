import type { Options, Plugin } from './types'

import { initStore, printInfo } from '@mnrendra/rollup-utils'
import { parseTSConfigAlias } from '@mnrendra/tsconfig-alias-parser'

import store from './store'
import { buildHooks } from './core'

/**
 * 🍣 A [Rollup](https://rollupjs.org/) plugin to resolve alias paths and
 * automatically read the alias configuration from `tsconfig.json`.
 *
 * @param {Options} options - The options object.
 *
 * @returns {Promise<Plugin>} Rollup plugin object.
 *
 * @see https://www.npmjs.com/package/@mnrendra/rollup-plugin-alias
 */
const main = async ({
  aliases = [],
  compilerOptions = undefined
}: Options = {}): Promise<Plugin> => {
  // Initialize store.
  await initStore(store)

  // Parse aliases from `tsconfig.json`.
  const tsConfigAliases = await parseTSConfigAlias(compilerOptions)

  // Store options.
  store.aliases = Array.isArray(aliases) && aliases.length > 0
    ? aliases
    : tsConfigAliases

  // Print info.
  printInfo(store)

  // Return Rollup plugin object.
  return {
    /**
     * Properties
     */
    name: store.pluginName,
    version: store.version,

    /**
     * Build Hooks
     */
    buildStart: buildHooks.buildStart,
    transform: buildHooks.transform
  }
}

export default main
