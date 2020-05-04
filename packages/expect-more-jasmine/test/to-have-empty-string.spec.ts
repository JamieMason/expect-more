import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveEmptyString()', () => {
  expect({ child: { grandchild: '' } }).toHaveEmptyString('child.grandchild');
});
