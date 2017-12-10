# expect.arrayOfObjects()

Asserts that a value is an `Array` containing only `Object` values.

## Examples

```js
expect(team.members).toEqual(expect.arrayOfObjects());
```

```js
expect(team).toEqual(
  expect.objectContaining({
    members: expect.arrayOfObjects()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    members: expect.arrayOfObjects()
  })
);
```
