import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveOddNumber()', () => {
  expect({ child: { grandchild: 5 } }).toHaveOddNumber('child.grandchild');
});
