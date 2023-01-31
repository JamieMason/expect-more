import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeArrayOfBooleans()', () => {
  expect([true, false, new Boolean(true)]).toBeArrayOfBooleans();
});
