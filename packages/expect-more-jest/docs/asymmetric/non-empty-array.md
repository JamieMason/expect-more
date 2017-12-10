# expect.nonEmptyArray()

Asserts that a value is an `Array` containing at least 1 value.

## Examples

```js
expect(basket.items).toEqual(expect.nonEmptyArray());
```

```js
expect(basket).toEqual(
  expect.objectContaining({
    items: expect.nonEmptyArray()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    items: expect.nonEmptyArray()
  })
);
```
