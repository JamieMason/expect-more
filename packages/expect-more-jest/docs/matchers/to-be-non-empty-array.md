# expect(value: any).toBeNonEmptyArray()

Asserts that a value is an `Array` containing at least 1 value.

## Examples

```js
expect(basket.items).toBeNonEmptyArray();
```

```js
expect(basket.items).toEqual(expect.toBeNonEmptyArray());
```

```js
expect(basket).toEqual(
  expect.objectContaining({
    items: expect.toBeNonEmptyArray()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    items: expect.toBeNonEmptyArray()
  })
);
```
