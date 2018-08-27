import { assertMemberComparisonMatcher } from './lib/member-assertions';

assertMemberComparisonMatcher({
  failOther: new Date('2018-08-28'),
  failReceived: new Date('2018-08-27'),
  name: 'toHaveDateAfter',
  passOther: new Date('2018-08-27'),
  passReceived: new Date('2018-08-28')
});
