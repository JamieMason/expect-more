import * as api from '../src';

it('accepts if value is a string with a shorter length than the provided string', () => {
  [['abc', 'ab'], ['a', '']].forEach(([other, value]) => {
    expect(api.isShorterThan(other, value)).toEqual(true);
    expect(api.isShorterThan(other)(value)).toEqual(true);
  });
});

it('rejects otherwise', () => {
  [['a', 'abc'], ['ab', undefined], ['ab', null]].forEach(([other, value]) => {
    expect(api.isShorterThan(other, value)).toEqual(false);
    expect(api.isShorterThan(other)(value)).toEqual(false);
  });
});
