// ./src/index.js

/**
 * Require
 */

// @consts
const consts = require('@consts')
const { urls } = require("@consts")
const url = require('@consts/urls/');
const { api } = require("@consts/urls/");

// @utils
const { logs } = require('@utils//')
const info = require("@utils/logs/info//");

// @/share
const { login } = require('../share/services');
const share = require("../share")
const { apis } = require('@/share');

// @tests
const tests = require('@tests');
const {
  mocks
} = require("@tests")
const {
  data,
  dummy
} = require("@tests/mocks")

const dynamicImport = async () => {
  const mod = await import('@/abc')
  console.log(mod)
}

dynamicImport()

/**
 * Exports
 */

module.exports = {
  // @consts
  consts,
  urls,
  url,
  api,
  // @utils
  logs,
  info,
  // @/share
  login,
  share,
  apis,
  // @tests
  tests,
  mocks,
  data,
  dummy
}
