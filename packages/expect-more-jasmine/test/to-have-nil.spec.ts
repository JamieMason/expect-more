import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveNil()', () => {
  expect({ child: { grandchild: undefined } }).toHaveNil('child.grandchild');
});
