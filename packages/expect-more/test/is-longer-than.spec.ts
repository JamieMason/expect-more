import * as api from '../src';

it('accepts if value is a string with a greater length than the provided string', () => {
  [['ab', 'abc'], ['', 'a']].forEach(([other, value]) => {
    expect(api.isLongerThan(other, value)).toEqual(true);
    expect(api.isLongerThan(other)(value)).toEqual(true);
  });
});

it('accepts if value is an array with a greater length than the provided array', () => {
  [[[5, 2], [7, 3, 1]], [[], [3]]].forEach(([other, value]) => {
    expect(api.isLongerThan(other, value)).toEqual(true);
    expect(api.isLongerThan(other)(value)).toEqual(true);
  });
});

it('rejects otherwise', () => {
  [['ab', 'a'], ['ab', undefined], ['ab', null]].forEach(([other, value]) => {
    expect(api.isLongerThan(other, value)).toEqual(false);
    expect(api.isLongerThan(other)(value)).toEqual(false);
  });
});
