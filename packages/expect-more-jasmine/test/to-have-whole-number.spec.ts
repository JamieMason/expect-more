import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveWholeNumber()', () => {
  expect({ child: { grandchild: 8 } }).toHaveWholeNumber('child.grandchild');
});
