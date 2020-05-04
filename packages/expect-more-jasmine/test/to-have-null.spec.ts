import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveNull()', () => {
  expect({ child: { grandchild: null } }).toHaveNull('child.grandchild');
});
