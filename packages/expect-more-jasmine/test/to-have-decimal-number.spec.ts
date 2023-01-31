import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveDecimalNumber()', () => {
  expect({ child: { grandchild: 12.55 } }).toHaveDecimalNumber('child.grandchild');
});
