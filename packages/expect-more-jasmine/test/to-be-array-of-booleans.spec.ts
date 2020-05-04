import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeArrayOfBooleans()', () => {
  expect([true, false, new Boolean(true)]).toBeArrayOfBooleans();
});
