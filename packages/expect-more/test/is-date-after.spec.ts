import { midnight, oneAm } from '../../../scripts/fixtures';
import * as api from '../src';

it('accepts if value is a date occurring after the date provided', () => {
  [[midnight(), oneAm()]].forEach(([otherDate, date]) => {
    expect(api.isAfter(otherDate)(date)).toEqual(true);
    expect(api.isAfter(otherDate, date)).toEqual(true);
  });
});

it('rejects otherwise', () => {
  [[oneAm(), midnight()], [oneAm(), oneAm()]].forEach(([otherDate, date]) => {
    expect(api.isAfter(otherDate)(date)).toEqual(false);
    expect(api.isAfter(otherDate, date)).toEqual(false);
  });
});
