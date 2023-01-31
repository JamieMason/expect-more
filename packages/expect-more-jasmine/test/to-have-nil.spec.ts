import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveNil()', () => {
  expect({ child: { grandchild: undefined } }).toHaveNil('child.grandchild');
});
