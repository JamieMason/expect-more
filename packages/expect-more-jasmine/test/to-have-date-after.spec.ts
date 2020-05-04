import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveDateAfter()', () => {
  expect({ child: { grandchild: new Date('2020-01-01') } }).toHaveDateAfter(
    'child.grandchild',
    new Date('2019-12-31'),
  );
});
