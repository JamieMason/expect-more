import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveArrayIncludingAnyOf()', () => {
  expect({ child: { grandchild: [12, 0, 14, 'Ginola'] } }).toHaveArrayIncludingAnyOf(
    'child.grandchild',
    ['Ginola', 3],
  );
});
