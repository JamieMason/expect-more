// : {
//   failReceived: any;
//   name: string;
//   passReceived: any;
// }

export const assertMemberMatcher = ({ failReceived, name, passReceived }) => {
  it(`provides ${name}`, () => {
    expect({ nested: { property: passReceived } })[name]('nested.property');
    expect(() => expect({ nested: { property: failReceived } })[name]('miss')).toThrow();
    expect(() => expect({ nested: { property: passReceived } }).not[name]('nested.property')).toThrow();
  });

  it(`provides expect.${name}`, () => {
    expect({ nested: { property: passReceived } }).toEqual(expect[name]('nested.property'));
  });
};

export const assertMemberComparisonMatcher = ({
  failOther,
  failReceived,
  name,
  passOther,
  passReceived
}: {
  failOther: any;
  failReceived: any;
  name: string;
  passOther: any;
  passReceived: any;
}) => {
  it(`provides ${name}`, () => {
    expect({ nested: { property: passReceived } })[name]('nested.property', passOther);
    expect(() => expect({ nested: { property: failReceived } })[name]('miss', failOther)).toThrow();
    expect(() => expect({ nested: { property: passReceived } }).not[name]('nested.property', passOther)).toThrow();
  });

  describe.skip('when Jest supports variadic asymmetric matchers', () => {
    it(`provides expect.${name}`, () => {
      expect({ nested: { property: passReceived } }).toEqual(expect[name]('nested.property', passOther));
    });
  });
};
