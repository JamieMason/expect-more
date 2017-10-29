import * as api from '../src';

it('accepts case-sensitive string ending with another', () => {
  expect(api.endsWith('mie')('jamie')).toEqual(true);
  expect(api.endsWith('mie', 'jamie')).toEqual(true);
});

it('rejects otherwise', () => {
  [
    ['mie', 'jamie '],
    ['mie', 'jamiE'],
    ['', ''],
    ['', undefined],
    ['undefined', undefined],
    [undefined, 'undefined']
  ].forEach(([otherString, value]) => {
    expect(api.endsWith(otherString)(value)).toEqual(false);
    expect(api.endsWith(otherString, value)).toEqual(false);
  });
});
