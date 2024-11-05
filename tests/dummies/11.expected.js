import * as consts from './consts';
import { urls as url } from './consts';
import * as urls from './consts/urls';
import { api } from './consts/urls';
import utils, { logs } from './utils';
import info from './utils/logs/info';
import { login } from '../share/services';
import * as share from '../share';
import sanity, { apis } from './share';
import * as tests from '../tests';
import { mocks } from '../tests';
import mock, {
    data,
    dummy
} from '../tests/mocks';
const dynamicImport = async () => {
    const mod = await import('./abc');
    console.log(mod);
};
dynamicImport();
export {
    consts,
    url,
    urls,
    api,
    utils,
    logs,
    info,
    login,
    share,
    sanity,
    apis,
    tests,
    mocks,
    mock,
    data,
    dummy
};