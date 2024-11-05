const consts = require('../consts');
const {urls} = require('../consts');
const url = require('../consts/urls');
const {api} = require('../consts/urls');
const {logs} = require('../utils');
const info = require('../utils/logs/info');
const {login} = require('../share/services');
const share = require('../share');
const {apis} = require('../share');
const tests = require('../../tests');
const {mocks} = require('../../tests');
const {data, dummy} = require('../../tests/mocks');
const dynamicImport = async () => {
    const mod = await import('../abc');
    console.log(mod);
};
dynamicImport();
module.exports = {
    consts,
    urls,
    url,
    api,
    logs,
    info,
    login,
    share,
    apis,
    tests,
    mocks,
    data,
    dummy
};