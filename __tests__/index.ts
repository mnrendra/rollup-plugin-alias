import type { InputPluginOption } from 'rollup'

import type { Plugin } from '@/types'

import { type Package, readPackage } from '@mnrendra/read-package'

import read from '@tests/utils/read'

import index from '..'

describe('Test all features:', () => {
  let plugin = {} as unknown as Plugin
  let pkg = {} as unknown as Package

  beforeEach(async () => {
    plugin = await index()
    pkg = await readPackage()
  })

  it('Should have a `name`!', () => {
    expect(plugin.name).toBe('alias')
  })

  it('Should have a `version`!', () => {
    expect(plugin.version).toBe(pkg.version)
  })

  it('Should reject within error when the preceding plugin is an object!', () => {
    const received = (): void => {
      plugin.buildStart({
        plugins: {} as unknown as InputPluginOption
      })
    }

    const expected = Error(`"rollup-plugin-esbuild" is required and must be invoked immediately before "${pkg.name}"!\nMore info: ${pkg.homepage}`)

    expect(received).toThrow(expected)
  })

  it('Should reject within error when the preceding plugin is `undefined`!', () => {
    const received = (): void => {
      plugin.buildStart({
        plugins: [] as unknown as InputPluginOption
      })
    }

    const expected = Error(`"rollup-plugin-esbuild" is required and must be invoked immediately before "${pkg.name}"!\nMore info: ${pkg.homepage}`)

    expect(received).toThrow(expected)
  })

  it('Should reject within error when the preceding plugin name is not "esbuild"!', () => {
    const received = (): void => {
      plugin.buildStart({
        plugins: [{ name: '' }] as unknown as InputPluginOption
      })
    }

    const expected = Error(`"rollup-plugin-esbuild" is required and must be invoked immediately before "${pkg.name}"!\nMore info: ${pkg.homepage}`)

    expect(received).toThrow(expected)
  })

  it('Should reject within error when the preceding plugin is `null`!', () => {
    const received = (): void => {
      plugin.buildStart({
        plugins: [null] as unknown as InputPluginOption
      })
    }

    const expected = Error(`"rollup-plugin-esbuild" is required and must be invoked immediately before "${pkg.name}"!\nMore info: ${pkg.homepage}`)

    expect(received).toThrow(expected)
  })

  it('Should resolve a code as "./tests/dummies/1.expected.js" when given "./tests/dummies/1.resource.js" and `plugin.format` set to "cjs"!', async () => {
    const code = read('./tests/dummies/1.resource.js')
    const path = './tests/dummies/1.resource.js'

    const received = plugin.transform(code, path)
    const expected = read('./tests/dummies/1.expected.js')

    expect(received.code).toBe(expected)
  })

  it('Should resolve a code as "./tests/dummies/2.expected.js" when given "./tests/dummies/2.resource.js" and `plugin.format` set to "cjs"!', async () => {
    const code = read('./tests/dummies/2.resource.js')
    const path = './tests/dummies/2.resource.js'

    const received = plugin.transform(code, path)
    const expected = read('./tests/dummies/2.expected.js')

    expect(received.code).toBe(expected)
  })

  describe('By passing `aliases` option:', () => {
    let plugin = {} as unknown as Plugin

    beforeEach(async () => {
      plugin = await index({
        aliases: [
          { alias: '@', path: './src/' },
          { alias: '@consts', path: './src/consts' },
          { alias: '@utils/', path: './src/utils/' },
          { alias: '@tests', path: './tests' }
        ]
      })
    })

    it('Should resolve a code as "./tests/dummies/11.expected.js" when given "./tests/dummies/11.resource.js"!', async () => {
      const code = read('./tests/dummies/11.resource.js')
      const path = './src/index.mjs'

      const received = plugin.transform(code, path)
      const expected = read('./tests/dummies/11.expected.js')

      expect(received.code).toBe(expected)
    })

    it('Should resolve a code as "./tests/dummies/12.expected.js" when given "./tests/dummies/12.resource.js"!', async () => {
      const code = read('./tests/dummies/12.resource.js')
      const path = './src/main/index.mjs'

      const received = plugin.transform(code, path)
      const expected = read('./tests/dummies/12.expected.js')

      expect(received.code).toBe(expected)
    })

    it('Should resolve a code as "./tests/dummies/13.expected.js" when given "./tests/dummies/13.resource.js"!', async () => {
      const code = read('./tests/dummies/13.resource.js')
      const path = './src/index.mjs'

      const received = plugin.transform(code, path)
      const expected = read('./tests/dummies/13.expected.js')

      expect(received.code).toBe(expected)
    })

    it('Should resolve a code as "./tests/dummies/14.expected.js" when given "./tests/dummies/14.resource.js"!', async () => {
      const code = read('./tests/dummies/14.resource.js')
      const path = './src/main/index.mjs'

      const received = plugin.transform(code, path)
      const expected = read('./tests/dummies/14.expected.js')

      expect(received.code).toBe(expected)
    })

    it('Should reject within "Unexpected token" error when given "./tests/dummies/5.resource.ts"!', () => {
      const code = read('./tests/dummies/15.resource.ts')
      const path = ''

      const received = (): void => {
        plugin.transform(code, path)
      }

      expect(received).toThrow(Error('Your source code contains an \'Unexpected token\' error or might be in `TypeScript` format, so it cannot be parsed. This module can only parse CommonJS or ESModule formats.'))
    })
  })

  describe('By passing `compilerOptions` option:', () => {
    let plugin = {} as unknown as Plugin

    beforeEach(async () => {
      plugin = await index({
        compilerOptions: {
          baseUrl: './src',
          paths: {
            // @
            '@': ['./'],
            '@/*': ['./*'],
            // @consts
            '@consts': ['./consts'],
            '@/consts/*': ['./consts/*'],
            // @utils
            '@utils': ['./utils'],
            '@/utils/*': ['./utils/*'],
            // @tests
            '@tests': ['../tests'],
            '@tests/*': ['../tests/*']
          }
        }
      })
    })

    it('Should resolve a code as "./tests/dummies/11.expected.js" when given "./tests/dummies/11.resource.js"!', async () => {
      const code = read('./tests/dummies/11.resource.js')
      const path = './src/index.mjs'

      const received = plugin.transform(code, path)
      const expected = read('./tests/dummies/11.expected.js')

      expect(received.code).toBe(expected)
    })

    it('Should resolve a code as "./tests/dummies/12.expected.js" when given "./tests/dummies/12.resource.js"!', async () => {
      const code = read('./tests/dummies/12.resource.js')
      const path = './src/main/index.mjs'

      const received = plugin.transform(code, path)
      const expected = read('./tests/dummies/12.expected.js')

      expect(received.code).toBe(expected)
    })

    it('Should resolve a code as "./tests/dummies/13.expected.js" when given "./tests/dummies/13.resource.js"!', async () => {
      const code = read('./tests/dummies/13.resource.js')
      const path = './src/index.mjs'

      const received = plugin.transform(code, path)
      const expected = read('./tests/dummies/13.expected.js')

      expect(received.code).toBe(expected)
    })

    it('Should resolve a code as "./tests/dummies/14.expected.js" when given "./tests/dummies/14.resource.js"!', async () => {
      const code = read('./tests/dummies/14.resource.js')
      const path = './src/main/index.mjs'

      const received = plugin.transform(code, path)
      const expected = read('./tests/dummies/14.expected.js')

      expect(received.code).toBe(expected)
    })

    it('Should reject within "Unexpected token" error when given "./tests/dummies/5.resource.ts"!', () => {
      const code = read('./tests/dummies/15.resource.ts')
      const path = ''

      const received = (): void => {
        plugin.transform(code, path)
      }

      expect(received).toThrow(Error('Your source code contains an \'Unexpected token\' error or might be in `TypeScript` format, so it cannot be parsed. This module can only parse CommonJS or ESModule formats.'))
    })
  })
})
