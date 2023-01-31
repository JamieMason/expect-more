import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveStartingWith()', () => {
  expect({ child: { grandchild: 'JavaScript' } }).toHaveStartingWith('child.grandchild', 'Java');
});
