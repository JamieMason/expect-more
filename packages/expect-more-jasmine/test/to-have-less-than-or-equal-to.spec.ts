import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveLessThanOrEqualTo()', () => {
  expect({ child: { grandchild: 8 } }).toHaveLessThanOrEqualTo('child.grandchild', 12);
});
