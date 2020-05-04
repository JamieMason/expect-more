import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveUndefined()', () => {
  expect({ child: { grandchild: undefined } }).toHaveUndefined('child.grandchild');
});
