import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeEmptyString()', () => {
  expect('').toBeEmptyString();
});
