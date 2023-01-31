import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveJsonString()', () => {
  expect({ child: { grandchild: '{"i":"am valid JSON"}' } }).toHaveJsonString('child.grandchild');
});
