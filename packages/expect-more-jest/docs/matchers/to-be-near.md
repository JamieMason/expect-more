# expect().toBeNear(other: number, epsilon: number)

Asserts that a value is a `Number` which is at most `epsilon` greater or smaller than `other` number.

## Examples

```js
expect(attempt.coordinates).toBeNear(target.coordinates, weapon.blastRadius);
```
