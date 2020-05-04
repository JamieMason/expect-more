import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveWalkable()', () => {
  expect({ child: { grandchild: {} } }).toHaveWalkable('child.grandchild');
});
