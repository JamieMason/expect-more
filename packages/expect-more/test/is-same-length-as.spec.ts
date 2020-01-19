import api = require('../src');

it('accepts if value is a string with the same length than the provided string', () => {
  [
    ['abc', 'abc'],
    ['a', 'a'],
    ['', ''],
  ].forEach(([other, value]) => {
    expect(api.isSameLengthAs(other, value)).toEqual(true);
    expect(api.isSameLengthAs(other)(value)).toEqual(true);
  });
});

it('accepts if value is an array with the same length than the provided array', () => {
  [
    [
      [4, 2, 6],
      [7, 4, 6],
    ],
    [
      [8, 9],
      [0, 0],
    ],
  ].forEach(([other, value]) => {
    expect(api.isSameLengthAs(other, value)).toEqual(true);
    expect(api.isSameLengthAs(other)(value)).toEqual(true);
  });
});

it('rejects otherwise', () => {
  [
    ['a', 'abc'],
    ['ab', undefined],
    ['ab', null],
  ].forEach(([other, value]) => {
    expect(api.isSameLengthAs(other, value)).toEqual(false);
    expect(api.isSameLengthAs(other)(value)).toEqual(false);
  });
});
