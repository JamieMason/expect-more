import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveNegativeNumber()', () => {
  expect({ child: { grandchild: -18 } }).toHaveNegativeNumber('child.grandchild');
});
