import 'expect-more-jest';

it('provides expect().toBeArrayOfObjects()', () => {
  expect([{}, new Object()]).toBeArrayOfObjects();
});

it('provides expect().not.toBeArrayOfObjects()', () => {
  expect(() => expect([{}, new Object()]).not.toBeArrayOfObjects()).toThrow();
});

it('provides expect.toBeArrayOfObjects()', () => {
  expect([{}, new Object()]).toEqual(expect.toBeArrayOfObjects());
});
