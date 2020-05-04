import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeArray()', () => {
  expect([2, true, 'string']).toBeArray();
});
