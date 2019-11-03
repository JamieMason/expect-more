import { asyncFunctions, notAsyncFunctions } from '../../../test/fixtures';
import api = require('../src');

check.it('accepts if value is an async function', asyncFunctions, (value) => {
  expect(api.isAsyncFunction(value)).toEqual(true);
});

check.it('rejects otherwise', notAsyncFunctions, (value) => {
  expect(api.isAsyncFunction(value)).toEqual(false);
});
