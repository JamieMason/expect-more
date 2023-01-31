import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveOddNumber()', () => {
  expect({ child: { grandchild: 5 } }).toHaveOddNumber('child.grandchild');
});
