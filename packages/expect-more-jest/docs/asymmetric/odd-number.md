# expect.oddNumber()

Asserts that a value is an odd `Number`.

## Examples

```js
expect(triangle.sides).toEqual(expect.oddNumber());
```

```js
expect(triangle).toEqual(
  expect.objectContaining({
    sides: expect.oddNumber()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    sides: expect.oddNumber()
  })
);
```
