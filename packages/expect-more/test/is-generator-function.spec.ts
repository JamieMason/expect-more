import { generatorFunctions, notGeneratorFunctions } from '../../../test/fixtures';
import api = require('../src');

check.it('accepts if value is a generator function', generatorFunctions, (value) => {
  expect(api.isGeneratorFunction(value)).toEqual(true);
});

check.it('rejects otherwise', notGeneratorFunctions, (value) => {
  expect(api.isGeneratorFunction(value)).toEqual(false);
});
