import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveDate()', () => {
  expect({ child: { grandchild: new Date('2019-12-31') } }).toHaveDate('child.grandchild');
});
