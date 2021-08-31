import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeArrayIncludingAnyOf()', () => {
  expect([12, 0, 14, 'Ginola']).toBeArrayIncludingAnyOf(['Ginola', 3]);
});
