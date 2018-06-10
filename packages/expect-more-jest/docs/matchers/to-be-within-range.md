# expect(value: any).toBeWithinRange(floor: number, ceiling: number)

Asserts that a value is a `Number` which is both greater than or equal to `floor` and less than or equal to `ceiling`.

## Examples

```js
expect(weapon.shotsRemaining).toBeWithinRange(0, weapon.capacity);
```

```js
expect(weapon.shotsRemaining).toEqual(expect.toBeWithinRange(0, weapon.capacity));
```

```js
expect(weapon).toEqual(
  expect.objectContaining({
    shotsRemaining: expect.toBeWithinRange(0, weapon.capacity)
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    shotsRemaining: expect.toBeWithinRange(0, weapon.capacity)
  })
);
```
