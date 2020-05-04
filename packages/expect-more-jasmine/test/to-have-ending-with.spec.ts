import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveEndingWith()', () => {
  expect({ child: { grandchild: 'JavaScript' } }).toHaveEndingWith('child.grandchild', 'Script');
});
