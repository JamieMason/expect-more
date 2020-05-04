import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeIso8601()', () => {
  expect('1999-12-31T23:59:59').toBeIso8601();
});
