import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeNonEmptyString()', () => {
  expect('i am not empty').toBeNonEmptyString();
});
