import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveWholeNumber()', () => {
  expect({ child: { grandchild: 8 } }).toHaveWholeNumber('child.grandchild');
});
