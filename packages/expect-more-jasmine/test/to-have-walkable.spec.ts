import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveWalkable()', () => {
  expect({ child: { grandchild: {} } }).toHaveWalkable('child.grandchild');
});
