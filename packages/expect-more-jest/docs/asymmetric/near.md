# expect.near(other: number, epsilon: number)

Asserts that a value is a `Number` which is at most `epsilon` greater or smaller than `other` number.

## Examples

```js
expect(attempt.coordinates).toEqual(expect.near(target.coordinates, weapon.blastRadius));
```

```js
expect(attempt).toEqual(
  expect.objectContaining({
    coordinates: expect.near(target.coordinates, weapon.blastRadius)
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    coordinates: expect.near(target.coordinates, weapon.blastRadius)
  })
);
```
