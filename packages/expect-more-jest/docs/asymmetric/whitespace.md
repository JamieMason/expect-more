# expect.whitespace()

Asserts that a value is a `String` containing only whitespace characters.

## Examples

```js
expect(htmlMinify.dataRemoved).toEqual(expect.whitespace());
```

```js
expect(htmlMinify).toEqual(
  expect.objectContaining({
    dataRemoved: expect.whitespace()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    dataRemoved: expect.whitespace()
  })
);
```
