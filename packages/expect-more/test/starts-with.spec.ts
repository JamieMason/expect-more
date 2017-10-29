import * as api from '../src';

it('accepts case-sensitive string starting with another', () => {
  expect(api.startsWith('jam')('jamie')).toEqual(true);
  expect(api.startsWith('jam', 'jamie')).toEqual(true);
});

it('rejects otherwise', () => {
  [
    ['jam', ' jamie'],
    ['jam', 'JAmie'],
    ['', ''],
    ['', undefined],
    ['undefined', undefined],
    [undefined, 'undefined']
  ].forEach(([otherString, value]) => {
    expect(api.startsWith(otherString)(value)).toEqual(false);
    expect(api.startsWith(otherString, value)).toEqual(false);
  });
});
