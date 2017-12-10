# expect.shorterThan(other: string)

Asserts that a value is a `String` whose length is less than `other` string.

## Examples

```js
expect(truncatedFile.contents).toEqual(expect.shorterThan(file.contents));
```

```js
expect(truncatedFile).toEqual(
  expect.objectContaining({
    contents: expect.shorterThan(file.contents)
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    contents: expect.shorterThan(file.contents)
  })
);
```
