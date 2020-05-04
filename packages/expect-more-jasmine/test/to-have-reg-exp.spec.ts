import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveRegExp()', () => {
  expect({ child: { grandchild: new RegExp('i am a regular expression') } }).toHaveRegExp(
    'child.grandchild',
  );
});
