import 'expect-more-jest';

it('provides expect().toBeSameLengthAs()', () => {
  expect(['i also have', '2 items']).toBeSameLengthAs(['i have', '2 items']);
});

it('provides expect().not.toBeSameLengthAs()', () => {
  expect(() =>
    expect(['i also have', '2 items']).not.toBeSameLengthAs(['i have', '2 items']),
  ).toThrow();
});

it('provides expect.toBeSameLengthAs()', () => {
  expect(['i also have', '2 items']).toEqual(expect.toBeSameLengthAs(['i have', '2 items']));
});
