import { assertMemberComparisonMatcher } from './lib/member-assertions';

assertMemberComparisonMatcher({
  failOther: new Date('2018-08-27'),
  failReceived: new Date('2018-08-28'),
  name: 'toHaveDateBefore',
  passOther: new Date('2018-08-28'),
  passReceived: new Date('2018-08-27'),
});
