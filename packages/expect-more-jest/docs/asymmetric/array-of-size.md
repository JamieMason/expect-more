# expect.arrayOfSize(size: number)

Asserts that a value is an `Array` containing `size` number of values.

## Examples

```js
expect(cat.paws).toEqual(expect.arrayOfSize(4));
```

```js
expect(cat).toEqual(
  expect.objectContaining({
    paws: expect.arrayOfSize(4)
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    paws: expect.arrayOfSize(4)
  })
);
```
