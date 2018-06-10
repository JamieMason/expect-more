# expect(value: any).toBeDivisibleBy(other: number)

Asserts that a value is a `Number` divisible by `other` number.

## Examples

```js
expect(cat.paws).toBeDivisibleBy(2);
```

```js
expect(cat.paws).toEqual(expect.toBeDivisibleBy(2));
```

```js
expect(cat).toEqual(
  expect.objectContaining({
    paws: expect.toBeDivisibleBy(2)
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    paws: expect.toBeDivisibleBy(2)
  })
);
```
