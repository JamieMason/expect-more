import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveUndefined()', () => {
  expect({ child: { grandchild: undefined } }).toHaveUndefined('child.grandchild');
});
