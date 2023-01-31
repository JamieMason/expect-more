import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeArrayOfNumbers()', () => {
  expect([12, 0, 14]).toBeArrayOfNumbers();
});
