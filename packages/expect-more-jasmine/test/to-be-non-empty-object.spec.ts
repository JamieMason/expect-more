import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeNonEmptyObject()', () => {
  expect({ i: 'am not empty' }).toBeNonEmptyObject();
});
