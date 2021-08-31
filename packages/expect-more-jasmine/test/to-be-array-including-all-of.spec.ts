import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeArrayIncludingAllOf()', () => {
  expect([12, 0, 14, 'Ivo']).toBeArrayIncludingAllOf(['Ivo', 14]);
});
