import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveLessThanOrEqualTo()', () => {
  expect({ child: { grandchild: 8 } }).toHaveLessThanOrEqualTo('child.grandchild', 12);
});
