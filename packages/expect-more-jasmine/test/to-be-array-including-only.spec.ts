import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeArrayIncludingOnly()', () => {
  expect([5, 10, 1]).toBeArrayIncludingOnly([1, 5, 10]);
});
