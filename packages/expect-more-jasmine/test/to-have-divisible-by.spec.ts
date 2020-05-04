import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveDivisibleBy()', () => {
  expect({ child: { grandchild: 12 } }).toHaveDivisibleBy('child.grandchild', 2);
});
