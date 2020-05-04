import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveNonEmptyString()', () => {
  expect({ child: { grandchild: 'i am not empty' } }).toHaveNonEmptyString('child.grandchild');
});
