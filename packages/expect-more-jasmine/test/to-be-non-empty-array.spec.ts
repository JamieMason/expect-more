import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeNonEmptyArray()', () => {
  expect(['i', 'am not empty']).toBeNonEmptyArray();
});
