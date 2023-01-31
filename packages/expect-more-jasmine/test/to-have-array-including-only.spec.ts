import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveArrayIncludingOnly()', () => {
  expect({ child: { grandchild: [5, 10, 1] } }).toHaveArrayIncludingOnly(
    'child.grandchild',
    [1, 5, 10],
  );
});
