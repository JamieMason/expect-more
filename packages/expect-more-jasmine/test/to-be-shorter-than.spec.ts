import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeShorterThan()', () => {
  expect(['i have one item']).toBeShorterThan(['i', 'have', 4, 'items']);
});
