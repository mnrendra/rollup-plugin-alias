import type { Plugin as RollupPlugin } from 'rollup'

import type { buildHooks } from '../core'

interface Plugin extends RollupPlugin {
  name: string
  version: string
  buildStart: typeof buildHooks.buildStart
  transform: typeof buildHooks.transform
}

export default Plugin
