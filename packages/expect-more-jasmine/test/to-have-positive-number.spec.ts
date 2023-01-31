import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHavePositiveNumber()', () => {
  expect({ child: { grandchild: 5 } }).toHavePositiveNumber('child.grandchild');
});
