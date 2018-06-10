# expect(value: any).toBeArrayOfSize(size: number)

Asserts that a value is an `Array` containing `size` number of values.

## Examples

```js
expect(cat.paws).toBeArrayOfSize(4);
```

```js
expect(cat.paws).toEqual(expect.toBeArrayOfSize(4));
```

```js
expect(cat).toEqual(
  expect.objectContaining({
    paws: expect.toBeArrayOfSize(4)
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    paws: expect.toBeArrayOfSize(4)
  })
);
```
