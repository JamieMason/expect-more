import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeArrayOfNumbers()', () => {
  expect([12, 0, 14]).toBeArrayOfNumbers();
});
