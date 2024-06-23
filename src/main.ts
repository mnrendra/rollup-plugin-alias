import type { Plugin } from 'rollup'

import { initStore, printInfo } from '@mnrendra/rollup-utils'

import store from './store'

/**
 * A Rollup plugin to resolve alias paths from tsconfig compiler options.
 *
 * @returns {Promise<Plugin>} Rollup plugin object.
 */
const main = async (): Promise<Plugin> => {
  // Initialize store.
  await initStore(store)

  // Print info.
  await printInfo(store)

  // Return Rollup plugin object.
  return {
    /**
     * Properties
     */

    name: store.pluginName,
    version: store.version
  }
}

// Export the `main` as the default value.
export default main
