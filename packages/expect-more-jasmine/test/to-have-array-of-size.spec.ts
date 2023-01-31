import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveArrayOfSize()', () => {
  expect({ child: { grandchild: ['i', 'contain', 4, 'items'] } }).toHaveArrayOfSize(
    'child.grandchild',
    4,
  );
});
