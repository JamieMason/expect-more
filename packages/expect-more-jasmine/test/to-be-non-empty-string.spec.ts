import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeNonEmptyString()', () => {
  expect('i am not empty').toBeNonEmptyString();
});
