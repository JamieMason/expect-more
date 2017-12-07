# expect-more

## Status

This is a new project which needs a lot of work on documentation. It is under active development so there will likely be
changes, but at its core it is a rewrite of [jasmine-expect](https://github.com/JamieMason/Jasmine-Matchers#readme)
which is a mature, well-tested library.

Contributors welcome, please get in touch.

## Packages

This repository is a monorepo that we manage using [Lerna](https://github.com/lerna/lerna). That means that we actually
publish [several packages](https://github.com/JamieMason/expect-more/tree/master/packages) to npm from the same
codebase, including:

| Package                                    | Description                                                     |
| ------------------------------------------ | --------------------------------------------------------------- |
| [expect-more][expect-more]                 | Curried JavaScript Type Testing Library with Zero Dependencies. |
| [expect-more-jest][expect-more-jest]       | Custom Matchers for [Jest][jest].                               |
| [expect-more-jasmine][expect-more-jasmine] | Custom Matchers for [Jasmine][jasmine].                         |

[expect-more-jasmine]: https://github.com/JamieMason/expect-more/tree/master/packages/expect-more-jasmine/
[expect-more-jest]: https://github.com/JamieMason/expect-more/tree/master/packages/expect-more-jest/
[expect-more]: https://github.com/JamieMason/expect-more/tree/master/packages/expect-more/
[jasmine]: https://jasmine.github.io/
[jest]: https://facebook.github.io/jest/
