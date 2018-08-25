import { errorConstructors } from '../../../test/fixtures';
import api = require('../src');

check.it('accepts if function throws error of the given type when called', errorConstructors, (Err) => {
  const neverGonna = () => {
    throw new Err('wut?');
  };
  expect(api.throwsErrorOfType(Err.name, neverGonna)).toEqual(true);
  expect(api.throwsErrorOfType(Err.name)(neverGonna)).toEqual(true);
});

it('rejects otherwise', () => {
  expect(api.throwsErrorOfType('Error', () => 1)).toEqual(false);
  expect(api.throwsErrorOfType('Error')(() => 1)).toEqual(false);
});
