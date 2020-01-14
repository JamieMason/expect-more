import { assertMemberMatcher } from './lib/member-assertions';

assertMemberMatcher({
  failReceived: 3,
  name: 'toHaveEvenNumber',
  passReceived: 4,
});
