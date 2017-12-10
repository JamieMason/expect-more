# expect().toSurvive

Asserts that a function is resilient against incomplete or invalid data, usually received from external sources.

It can be used in conjunction with various [Generators][generators] to stress-test a function against whichever
scenarios most closely resemble the sources you are receiving data from.

If you are consuming data from [GraphQL][graphql] for example, then [gen.nullBranches][null-branches] would produce
values consistent with when your resolvers have been unable to find data for a given query.

## Example

```js
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
  const safe = data => getIn('deeply.dippy.bout.the.way.you.0', data);
  expect(safe).toSurvive(gen.nullNodes(shape));
});

// Whereas this test would fail with the following message:
// expected [Function unsafe] to survive when called with Deconstructor<NullNodes>: {"deeply": {"dippy": {"bout": {"the": {"way": {}}}}}}
it('rejects if your function throws when attempting to read unreachable values', () => {
  const unsafe = ({ deeply: { dippy: { bout: { the: { way: { you: [walk] } } } } } }) => walk;
  expect(unsafe).toSurvive(gen.nullNodes(shape));
});
```

[generators]: https://github.com/jamiemason/expect-more/tree/master/packages/expect-more-jest#generators
[graphql]: http://graphql.org/
[null-branches]: https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/test/gen/null-branches.spec.ts
