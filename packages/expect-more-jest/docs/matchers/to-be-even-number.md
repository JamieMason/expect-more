# expect(value: any).toBeEvenNumber()

Asserts that a value is an even `Number`.

## Examples

```js
expect(parallelogram.sides).toBeEvenNumber();
```

```js
expect(parallelogram.sides).toEqual(expect.toBeEvenNumber());
```

```js
expect(parallelogram).toEqual(
  expect.objectContaining({
    sides: expect.toBeEvenNumber()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    sides: expect.toBeEvenNumber()
  })
);
```
