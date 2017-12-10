# expect.evenNumber()

Asserts that a value is an even `Number`.

## Examples

```js
expect(parallelogram.sides).toEqual(expect.evenNumber());
```

```js
expect(parallelogram).toEqual(
  expect.objectContaining({
    sides: expect.evenNumber()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    sides: expect.evenNumber()
  })
);
```
