import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeSameLengthAs()', () => {
  expect(['i also have', '2 items']).toBeSameLengthAs(['i have', '2 items']);
});
