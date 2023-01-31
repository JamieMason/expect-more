import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveArrayOfStrings()', () => {
  expect({ child: { grandchild: ['we', 'are', 'all', 'strings'] } }).toHaveArrayOfStrings(
    'child.grandchild',
  );
});
