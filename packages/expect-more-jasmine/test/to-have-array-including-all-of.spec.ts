import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveArrayIncludingAllOf()', () => {
  expect({ child: { grandchild: [12, 0, 14, 'Ivo'] } }).toHaveArrayIncludingAllOf(
    'child.grandchild',
    ['Ivo', 14],
  );
});
