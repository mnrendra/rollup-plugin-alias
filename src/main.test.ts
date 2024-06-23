import type { Plugin } from 'rollup'

import store from './store'

import main from './main'

describe('Test main feature:', () => {
  let log: jest.SpyInstance

  let received: Plugin = { name: '' }

  beforeAll(async () => {
    log = jest.spyOn(console, 'log').mockImplementation(() => {})

    received = await main()
  })

  afterAll(() => {
    log.mockRestore()
  })

  describe('Test the `name` property:', () => {
    it('Should be the same as the `store.pluginName` value!', () => {
      expect(received.name).toBe(store.pluginName)
    })
  })

  describe('Test the `version` property:', () => {
    it('Should be the same as the `store.version` value!', () => {
      expect(received.version).toBe(store.version)
    })
  })
})
