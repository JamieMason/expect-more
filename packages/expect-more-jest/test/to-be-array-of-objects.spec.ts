it('provides toBeArrayOfObjects', () => {
  expect([{}]).toBeArrayOfObjects();
  expect(() => {
    expect([null]).toBeArrayOfObjects();
  }).toThrow();
  expect(() => {
    expect([{}]).not.toBeArrayOfObjects();
  }).toThrow();
});

it('provides expect.toBeArrayOfObjects', () => {
  expect([{}]).toEqual(expect.toBeArrayOfObjects());
});
