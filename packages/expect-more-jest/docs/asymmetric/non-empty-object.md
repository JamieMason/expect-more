# expect.nonEmptyObject()

Asserts that a value is an `Object` containing at least 1 member.

## Examples

```js
expect(activeUsers.byId).toEqual(expect.nonEmptyObject());
```

```js
expect(activeUsers).toEqual(
  expect.objectContaining({
    byId: expect.nonEmptyObject()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    byId: expect.nonEmptyObject()
  })
);
```
