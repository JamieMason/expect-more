import api = require('../src');

it('accepts if value is no more than epsilion larger or smaller than another', () => {
  [[4, 0.25, 4.23223432434], [20, 2, 22], [-40, 2, -42]].forEach(
    ([otherNumber, epsilon, value]) => {
      expect(api.isNear(otherNumber)(epsilon)(value)).toEqual(true);
      expect(api.isNear(otherNumber, epsilon, value)).toEqual(true);
    },
  );
});

it('rejects otherwise', () => {
  [[4, 0.2, 4.23223432434], [20, 1, 22], [-18, 11, -42]].forEach(
    ([otherNumber, epsilon, value]) => {
      expect(api.isNear(otherNumber)(epsilon)(value)).toEqual(false);
      expect(api.isNear(otherNumber, epsilon, value)).toEqual(false);
    },
  );
});
