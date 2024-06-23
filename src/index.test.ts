import type { Plugin } from 'rollup'

import store from './store'

import index from '.'

describe('Test all features:', () => {
  let log: jest.SpyInstance

  let received: Plugin = { name: '' }

  beforeAll(async () => {
    log = jest.spyOn(console, 'log').mockImplementation(() => {})

    received = await index()
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
