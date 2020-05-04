import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveMethod()', () => {
  expect({ child: { grandchild: () => 'i am a function' } }).toHaveMethod('child.grandchild');
});
