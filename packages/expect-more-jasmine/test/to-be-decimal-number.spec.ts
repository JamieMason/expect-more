import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeDecimalNumber()', () => {
  expect(12.55).toBeDecimalNumber();
});
