# expect.jsonString()

Asserts that a value is a `String` of valid [JSON][json].

## Examples

```js
expect(response.body).toEqual(expect.iso8601());
```

```js
expect(response).toEqual(
  expect.objectContaining({
    body: expect.iso8601()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    body: expect.iso8601()
  })
);
```

[json]: https://en.wikipedia.org/wiki/JSON
