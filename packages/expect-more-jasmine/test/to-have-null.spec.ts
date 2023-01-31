import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveNull()', () => {
  expect({ child: { grandchild: null } }).toHaveNull('child.grandchild');
});
