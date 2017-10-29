import { evenNumbers, notEvenNumbers } from '../../../scripts/fixtures';
import * as api from '../src';

check.it('accepts if value is an even number', evenNumbers, (value) => {
  expect(api.isEvenNumber(value)).toEqual(true);
});

check.it('rejects otherwise', notEvenNumbers, (value) => {
  expect(api.isEvenNumber(value)).toEqual(false);
});
