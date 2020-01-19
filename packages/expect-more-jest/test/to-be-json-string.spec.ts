it('provides expect().toBeJsonString()', () => {
  expect('{"i":"am valid JSON"}').toBeJsonString();
});

it('provides expect().not.toBeJsonString()', () => {
  expect(() => expect('{"i":"am valid JSON"}').not.toBeJsonString()).toThrow();
});

it('provides expect.toBeJsonString()', () => {
  expect('{"i":"am valid JSON"}').toEqual(expect.toBeJsonString());
});
