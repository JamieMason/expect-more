import { gen } from '../../src';

['missingBranches', 'missingLeaves', 'missingNodes', 'nullBranches', 'nullLeaves', 'nullNodes'].forEach(
  (method: string) => {
    it(`gen.${method} is a deconstructor`, () => {
      expect(gen[method]([1, 2, 3])).toEqual({
        assert: expect.any(Function),
        name: expect.nonEmptyString(),
        permutations: expect.nonEmptyArray(),
        shape: [1, 2, 3]
      });
    });
  }
);
