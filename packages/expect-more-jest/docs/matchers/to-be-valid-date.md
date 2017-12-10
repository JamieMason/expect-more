# expect().toBeValidDate()

Asserts that a value is an instance of `Date` whose _value_ is valid. `Date` is little like `Promise` in that it is a
container for a value. `new Date('wut?')` for example, is a valid `Date` which wraps a value which is _not_ valid.

## Examples

```js
expect(game.releaseDate).toBeValidDate();
```
