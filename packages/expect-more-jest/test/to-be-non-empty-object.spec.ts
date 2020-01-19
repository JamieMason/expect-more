it('provides expect().toBeNonEmptyObject()', () => {
  expect({ i: 'am not empty' }).toBeNonEmptyObject();
});

it('provides expect().not.toBeNonEmptyObject()', () => {
  expect(() => expect({ i: 'am not empty' }).not.toBeNonEmptyObject()).toThrow();
});

it('provides expect.toBeNonEmptyObject()', () => {
  expect({ i: 'am not empty' }).toEqual(expect.toBeNonEmptyObject());
});
