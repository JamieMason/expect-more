import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeNonEmptyArray()', () => {
  expect(['i', 'am not empty']).toBeNonEmptyArray();
});
