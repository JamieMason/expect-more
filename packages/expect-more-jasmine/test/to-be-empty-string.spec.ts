import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeEmptyString()', () => {
  expect('').toBeEmptyString();
});
