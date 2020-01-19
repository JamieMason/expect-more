import { gen } from 'testcheck';
import api = require('../src');

check.it(
  'accepts if value is present (whether value is defined or not)',
  gen.primitive,
  (value) => {
    expect(api.hasMember('propName', { propName: value })).toEqual(true);
    expect(api.hasMember('propName')({ propName: value })).toEqual(true);
  },
);

it('rejects otherwise', () => {
  expect(api.hasMember('propName', {})).toEqual(false);
  expect(api.hasMember('propName')({})).toEqual(false);
  expect(api.hasMember('otherProp', { propName: true })).toEqual(false);
  expect(api.hasMember('otherProp')({ propName: true })).toEqual(false);
});
