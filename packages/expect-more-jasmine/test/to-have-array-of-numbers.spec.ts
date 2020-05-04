import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveArrayOfNumbers()', () => {
  expect({ child: { grandchild: [12, 0, 14] } }).toHaveArrayOfNumbers('child.grandchild');
});
