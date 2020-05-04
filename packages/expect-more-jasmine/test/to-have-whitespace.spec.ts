import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveWhitespace()', () => {
  expect({ child: { grandchild: ' ' } }).toHaveWhitespace('child.grandchild');
});
