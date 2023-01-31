import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeArrayOfStrings()', () => {
  expect(['we', 'are', 'all', 'strings']).toBeArrayOfStrings();
});
