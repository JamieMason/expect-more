# expect(value: any).toBeOddNumber()

Asserts that a value is an odd `Number`.

## Examples

```js
expect(triangle.sides).toBeOddNumber();
```

```js
expect(triangle.sides).toEqual(expect.toBeOddNumber());
```

```js
expect(triangle).toEqual(
  expect.objectContaining({
    sides: expect.toBeOddNumber()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    sides: expect.toBeOddNumber()
  })
);
```
