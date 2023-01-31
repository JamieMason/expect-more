import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveRegExp()', () => {
  expect({ child: { grandchild: new RegExp('i am a regular expression') } }).toHaveRegExp(
    'child.grandchild',
  );
});
