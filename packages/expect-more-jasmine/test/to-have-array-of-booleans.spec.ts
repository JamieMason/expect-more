import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveArrayOfBooleans()', () => {
  expect({ child: { grandchild: [true, false, new Boolean(true)] } }).toHaveArrayOfBooleans(
    'child.grandchild',
  );
});
