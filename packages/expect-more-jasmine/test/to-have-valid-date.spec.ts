import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveValidDate()', () => {
  expect({ child: { grandchild: new Date('2020-01-01') } }).toHaveValidDate('child.grandchild');
});
