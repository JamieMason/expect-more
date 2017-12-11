# expect.shorterThan(other: string | any[])

Asserts that a value is a `String` or `Array` whose length is less than `other`.

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
