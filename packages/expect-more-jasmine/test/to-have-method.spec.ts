import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveMethod()', () => {
  expect({ child: { grandchild: () => 'i am a function' } }).toHaveMethod('child.grandchild');
});
