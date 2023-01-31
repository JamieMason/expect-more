import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveNegativeNumber()', () => {
  expect({ child: { grandchild: -18 } }).toHaveNegativeNumber('child.grandchild');
});
