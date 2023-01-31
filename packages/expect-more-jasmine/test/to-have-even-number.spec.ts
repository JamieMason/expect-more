import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveEvenNumber()', () => {
  expect({ child: { grandchild: 2 } }).toHaveEvenNumber('child.grandchild');
});
