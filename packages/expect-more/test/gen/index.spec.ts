import gen = require('../../src/gen');

[
  'withMissingBranches',
  'withMissingLeaves',
  'withMissingNodes',
  'withNullBranches',
  'withNullLeaves',
  'withNullNodes',
].forEach((method: string) => {
  it(`gen.${method} is exported`, () => {
    expect(gen[method]).toBeFunction();
  });
});
