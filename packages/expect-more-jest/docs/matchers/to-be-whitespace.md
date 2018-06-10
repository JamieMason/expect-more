# expect(value: any).toBeWhitespace()

Asserts that a value is a `String` containing only whitespace characters.

## Examples

```js
expect(htmlMinify.dataRemoved).toBeWhitespace();
```

```js
expect(htmlMinify.dataRemoved).toEqual(expect.toBeWhitespace());
```

```js
expect(htmlMinify).toEqual(
  expect.objectContaining({
    dataRemoved: expect.toBeWhitespace()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    dataRemoved: expect.toBeWhitespace()
  })
);
```
