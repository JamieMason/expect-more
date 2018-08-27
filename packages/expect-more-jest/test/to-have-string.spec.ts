import { assertMemberMatcher } from './lib/member-assertions';

assertMemberMatcher({
  failReceived: null,
  name: 'toHaveString',
  passReceived: 'hi'
});
