import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveGreaterThanOrEqualTo()', () => {
  expect({ child: { grandchild: 10 } }).toHaveGreaterThanOrEqualTo('child.grandchild', 5);
});
