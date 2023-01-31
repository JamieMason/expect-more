import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeNonEmptyObject()', () => {
  expect({ i: 'am not empty' }).toBeNonEmptyObject();
});
