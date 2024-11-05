// ./src/index.ts

/**
 * Imports
 */

// @consts
import * as consts from '@consts'
import { urls as url } from "@consts"
import * as urls from '@consts/urls/';
import { api } from "@consts/urls/";

// @utils
import utils, { logs } from '@utils//'
import info from "@utils/logs/info//";

// @/share
import { login } from '../share/services';
import * as share from "../share"
import sanity, { apis } from '@/share';

// @tests
import * as tests from '@tests';
import {
  mocks
} from "@tests"
import mock, {
  data,
  dummy
} from "@tests/mocks"

const dynamicImport = async (): void => {
  const mod = await import('@/abc')
  console.log(mod)
}

dynamicImport()

/**
 * Exports
 */

export {
  // @consts
  consts,
  url,
  urls,
  api,
  // @utils
  utils,
  logs,
  info,
  // @/share
  login,
  share,
  sanity,
  apis,
  // @tests
  tests,
  mocks,
  mock,
  data,
  dummy
}
