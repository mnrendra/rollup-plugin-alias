import type { Store as BaseStore } from '@mnrendra/rollup-utils'

import type { Options } from '../types'

interface Store extends BaseStore, Options {}

const store: Store = {
  // base store
  pluginName: '',
  name: '',
  version: '',
  homepage: '',
  // options
  aliases: []
}

export default store
