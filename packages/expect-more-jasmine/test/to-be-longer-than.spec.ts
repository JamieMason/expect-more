import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeLongerThan()', () => {
  expect(['i', 'have', 3]).toBeLongerThan([2, 'items']);
});
