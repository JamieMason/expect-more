import * as api from '../src';
import { midnight, oneAm } from './lib/fixtures';

it('accepts if value is a date occurring before the date provided', () => {
  [[oneAm(), midnight()]].forEach(([otherDate, date]) => {
    expect(api.isBefore(otherDate)(date)).toEqual(true);
    expect(api.isBefore(otherDate, date)).toEqual(true);
  });
});

it('rejects otherwise', () => {
  [[midnight(), oneAm()], [oneAm(), oneAm()]].forEach(([otherDate, date]) => {
    expect(api.isBefore(otherDate)(date)).toEqual(false);
    expect(api.isBefore(otherDate, date)).toEqual(false);
  });
});
