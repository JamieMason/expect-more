import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveNumberWithinRange()', () => {
  expect({ child: { grandchild: 7 } }).toHaveNumberWithinRange('child.grandchild', 0, 10);
});
