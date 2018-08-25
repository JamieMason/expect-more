import gen = require('../../../src/lib/gen');

['missingBranches', 'missingLeaves', 'missingNodes', 'nullBranches', 'nullLeaves', 'nullNodes'].forEach(
  (method: string) => {
    it(`gen.${method} is a generator`, () => {
      expect(gen[method]([1, 2, 3])).toEqual({
        assert: expect.any(Function),
        name: expect.toBeNonEmptyString(),
        permutations: expect.toBeNonEmptyArray(),
        shape: [1, 2, 3]
      });
    });
  }
);
