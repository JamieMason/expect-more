# expect.divisibleBy(other: number)

Asserts that a value is a `Number` divisible by `other` number.

## Examples

```js
expect(cat.paws).toEqual(expect.divisibleBy(2));
```

```js
expect(cat).toEqual(
  expect.objectContaining({
    paws: expect.divisibleBy(2)
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    paws: expect.divisibleBy(2)
  })
);
```
