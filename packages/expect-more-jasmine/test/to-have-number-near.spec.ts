import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveNumberNear()', () => {
  expect({ child: { grandchild: 4.8 } }).toHaveNumberNear('child.grandchild', 5, 0.5);
});
