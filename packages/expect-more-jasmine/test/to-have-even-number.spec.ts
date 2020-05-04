import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveEvenNumber()', () => {
  expect({ child: { grandchild: 2 } }).toHaveEvenNumber('child.grandchild');
});
