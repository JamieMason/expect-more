import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveEmptyString()', () => {
  expect({ child: { grandchild: '' } }).toHaveEmptyString('child.grandchild');
});
