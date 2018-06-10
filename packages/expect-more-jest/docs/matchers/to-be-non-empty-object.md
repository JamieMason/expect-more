# expect(value: any).toBeNonEmptyObject()

Asserts that a value is an `Object` containing at least 1 member.

## Examples

```js
expect(activeUsers.byId).toBeNonEmptyObject();
```

```js
expect(activeUsers.byId).toEqual(expect.toBeNonEmptyObject());
```

```js
expect(activeUsers).toEqual(
  expect.objectContaining({
    byId: expect.toBeNonEmptyObject()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    byId: expect.toBeNonEmptyObject()
  })
);
```
