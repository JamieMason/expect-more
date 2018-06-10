# expect(value: any).toBeArrayOfObjects()

Asserts that a value is an `Array` containing only `Object` values.

## Examples

```js
expect(team.members).toBeArrayOfObjects();
```

```js
expect(team.members).toEqual(expect.toBeArrayOfObjects());
```

```js
expect(team).toEqual(
  expect.objectContaining({
    members: expect.toBeArrayOfObjects()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    members: expect.toBeArrayOfObjects()
  })
);
```
