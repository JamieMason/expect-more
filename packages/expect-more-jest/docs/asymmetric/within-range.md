# expect.withinRange(floor: number, ceiling: number)

Asserts that a value is a `Number` which is both greater than or equal to `floor` and less than or equal to `ceiling`.

## Examples

```js
expect(weapon.shotsRemaining).toEqual(expect.withinRange(0, weapon.capacity));
```

```js
expect(weapon).toEqual(
  expect.objectContaining({
    shotsRemaining: expect.withinRange(0, weapon.capacity)
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    shotsRemaining: expect.withinRange(0, weapon.capacity)
  })
);
```
