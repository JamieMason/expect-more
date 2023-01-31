import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeWithinRange()', () => {
  expect(7).toBeWithinRange(0, 10);
});
