import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveWhitespace()', () => {
  expect({ child: { grandchild: ' ' } }).toHaveWhitespace('child.grandchild');
});
