import { assertMemberMatcher } from './lib/member-assertions';

assertMemberMatcher({
  failReceived: null,
  name: 'toHaveDate',
  passReceived: new Date(),
});
