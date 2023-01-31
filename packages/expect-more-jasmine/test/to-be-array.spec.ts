import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeArray()', () => {
  expect([2, true, 'string']).toBeArray();
});
