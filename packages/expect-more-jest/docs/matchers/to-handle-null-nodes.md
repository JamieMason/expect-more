# expect(fn).toHandleNullNodes(shape: object | any[])

When given a JSON-serialisable data structure, invokes your function multiple for each copy of `shape` where a single
nested branch or leaf value has been set to null. It is intended to assert that a function is resilient against
incomplete or invalid data received from external sources.

See the [spec for gen.nullNodes][null-nodes] for detail on how values are deconstructed.

## Example

```js
import { get } from 'lodash';

// Given this data
const shape = {
  deeply: {
    dippy: {
      bout: {
        the: {
          way: {
            you: ['walk']
          }
        }
      }
    }
  }
};

// This test would pass
it('asserts if your function safely reads nested values without throwing', () => {
  const safe = data => get('deeply.dippy.bout.the.way.you.0', data);
  expect(safe).toHandleNullNodes(shape);
});

// Whereas this test would fail
it('rejects if your function throws when attempting to read unreachable values', () => {
  const unsafe = ({ deeply: { dippy: { bout: { the: { way: { you: [walk] } } } } } }) => walk;
  expect(unsafe).toHandleNullNodes(shape);
});
```

[null-nodes]: https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/test/gen/null-nodes.spec.ts
