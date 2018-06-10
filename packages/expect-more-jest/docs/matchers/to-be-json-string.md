# expect(value: any).toBeJsonString()

Asserts that a value is a `String` of valid [JSON][json].

## Examples

```js
expect(response.body).toBeJsonString();
```

```js
expect(response.body).toEqual(expect.toBeJsonString());
```

```js
expect(response).toEqual(
  expect.objectContaining({
    body: expect.toBeJsonString()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    body: expect.toBeJsonString()
  })
);
```

[json]: https://en.wikipedia.org/wiki/JSON
