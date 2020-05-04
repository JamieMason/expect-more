import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeArrayOfStrings()', () => {
  expect(['we', 'are', 'all', 'strings']).toBeArrayOfStrings();
});
