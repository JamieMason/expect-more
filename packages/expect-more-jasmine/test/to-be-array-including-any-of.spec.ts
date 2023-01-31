import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeArrayIncludingAnyOf()', () => {
  expect([12, 0, 14, 'Ginola']).toBeArrayIncludingAnyOf(['Ginola', 3]);
});
