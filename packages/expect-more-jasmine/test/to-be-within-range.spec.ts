import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeWithinRange()', () => {
  expect(7).toBeWithinRange(0, 10);
});
