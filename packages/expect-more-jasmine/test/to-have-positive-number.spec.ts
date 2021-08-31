import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHavePositiveNumber()', () => {
  expect({ child: { grandchild: 5 } }).toHavePositiveNumber('child.grandchild');
});
