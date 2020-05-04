import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveJsonString()', () => {
  expect({ child: { grandchild: '{"i":"am valid JSON"}' } }).toHaveJsonString('child.grandchild');
});
