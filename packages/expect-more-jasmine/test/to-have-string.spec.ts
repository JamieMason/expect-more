import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveString()', () => {
  expect({ child: { grandchild: 'i am a string' } }).toHaveString('child.grandchild');
});
