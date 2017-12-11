import {
  Collection,
  ICurry,
  ICurry1Arg,
  ICurry2Args,
  ICurry3Args,
  ICurry4Args,
  ICurry5Args,
  Reducer,
  UnaryBoolFn,
  VoidFn
} from './typings';

const curryFn = (f: (...ys: any[]) => any, xs: any[], ctx: any) =>
  f.length <= xs.length ? f.apply(ctx, xs.slice(0, f.length)) : (...ys: any[]) => curryFn(f, xs.concat(ys), ctx);

const curry: ICurry = (<T>(f: () => T, ctx?: any) =>
  f.length === 0 ? () => f.call(ctx) : curryFn(f, [], ctx)) as ICurry;

const every = curry<UnaryBoolFn, any[], boolean>((fn: UnaryBoolFn, array: any[]): boolean => {
  for (let i = 0, len = array.length; i < len; i++) {
    if (fn(array[i]) === false) {
      return false;
    }
  }
  return array.length > 0;
});

const keys = (object: object): string[] => {
  const returnValue = [];
  for (const key in object) {
    if ({}.hasOwnProperty.call(object, key)) {
      returnValue.push(key);
    }
  }
  return returnValue;
};

const getType = (value: any): string => Object.prototype.toString.call(value);
const hasType = (type: string) => (value: any): boolean => getType(value) === `[object ${type}]`;

const isIndexedList = (value: any) => isString(value) || isArray(value);

export const isArray = hasType('Array');
export const isBoolean = hasType('Boolean');
export const isDate = hasType('Date');
export const isFunction = hasType('Function');
export const isNull = hasType('Null');
export const isObject = hasType('Object');
export const isRegExp = hasType('RegExp');
export const isString = hasType('String');
export const isUndefined = hasType('Undefined');
export const isWalkable = (value: any) => !isNull(value) && !isUndefined(value);

const isGivenBoolean = (bool: boolean) => (value: any) =>
  value === bool || (isBoolean(value) && value.valueOf() === bool);

export const isAfter = curry<Date, any, boolean>(
  (otherDate, value) => isDate(value) && isDate(otherDate) && value.getTime() > otherDate.getTime()
);

export const isFalse = isGivenBoolean(false);
export const isTrue = isGivenBoolean(true);
export const isBefore = curry<Date, any, boolean>((otherDate, value) => isAfter(value, otherDate));
export const isNumber = (value: any) => hasType('Number')(value) && !isNaN(parseFloat(value));
export const isDivisibleBy = curry<number, any, boolean>((other, value) => value % other === 0);
export const isEvenNumber = (value) => isNumber(value) && isDivisibleBy(2, value);
export const isOddNumber = (value) => isNumber(value) && !isDivisibleBy(2, value);
export const isWholeNumber = (value) => isNumber(value) && (value === 0 || isDivisibleBy(1, value));
export const isDecimalNumber = (value: any) => isNumber(value) && String(value).indexOf('.') !== -1;
export const isCalculable = (value: any) => !isNaN(value * 2);

export const isGreaterThanOrEqualTo = curry<number, any, boolean>(
  (other, value) => isNumber(value) && isNumber(other) && value >= other
);

export const isLessThanOrEqualTo = curry<number, any, boolean>(
  (other, value) => isNumber(value) && isNumber(other) && value <= other
);

export const isWithinRange = curry<number, number, any, boolean>(
  (floor, ceiling, value) => isLessThanOrEqualTo(ceiling, value) && isGreaterThanOrEqualTo(floor, value)
);

export const isNear = curry<number, number, any, boolean>((other, epsilon, value) =>
  isWithinRange(other - epsilon, other + epsilon, value)
);

export const isArrayOfBooleans = (value) => isArray(value) && every(isBoolean, value);
export const isArrayOfNumbers = (value) => isArray(value) && every(isNumber, value);
export const isArrayOfObjects = (value) => isArray(value) && every(isObject, value);
export const isArrayOfStrings = (value) => isArray(value) && every(isString, value);
export const isArrayOfSize = curry<number, any, boolean>((size, value) => isArray(value) && value.length === size);
export const isEmptyArray = isArrayOfSize(0);
export const isEmptyObject = (value) => isObject(value) && keys(value).length === 0;
export const isEmptyString = (value) => isString(value) && value.length === 0;
export const isValidDate = (value) => isDate(value) && !isNaN(value.getTime());
export const isWhitespace = (value: any) => isString(value) && value.search(/\S/) === -1;

export const startsWith = curry<string, any, boolean>(
  (otherString: string, value: any) =>
    isNonEmptyString(value) && isNonEmptyString(otherString) && value.slice(0, otherString.length) === otherString
);

export const endsWith = curry<string, any, boolean>(
  (otherString: string, value: any) =>
    isNonEmptyString(value) &&
    isNonEmptyString(otherString) &&
    value.slice(value.length - otherString.length, value.length) === otherString
);

export const isNonEmptyArray = (value: any) => isArray(value) && value.length > 0;
export const isNonEmptyObject = (value: any) => isObject(value) && keys(value).length > 0;
export const isNonEmptyString = (value: any) => isString(value) && value.length > 0;

export const isSameLengthAs = curry<string, any, boolean>(
  (otherString: string, value: any) =>
    isIndexedList(value) && isIndexedList(otherString) && value.length === otherString.length
);

export const isShorterThan = curry<string, any, boolean>(
  (otherString: string, value: any) =>
    isIndexedList(value) && isIndexedList(otherString) && value.length < otherString.length
);

export const isLongerThan = curry<string, any, boolean>(
  (otherString: string, value: any) =>
    isIndexedList(value) && isIndexedList(otherString) && value.length > otherString.length
);

export const hasMember = curry<string, any, boolean>(
  (key: string, value: any) => isString(key) && isWalkable(value) && key in value
);

export const isIso8601 = (value: any) => {
  // '1999-12-31'
  // '1999-12-31T23:59'
  // '1999-12-31T23:59:59'
  // '1999-12-31T23:59:59.000'
  // '1999-12-31T23:59:59.000Z'
  return (
    isString(value) &&
    (/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/.test(value) ||
      /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})$/.test(value) ||
      /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})$/.test(value) ||
      /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})\.([0-9]{3})$/.test(value) ||
      /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})\.([0-9]{3})Z$/.test(value)) &&
    isValidDate(new Date(value))
  );
};

export const isJsonString = (value: any) => {
  try {
    return JSON.parse(value) !== null;
  } catch (err) {
    return false;
  }
};

export const throwsAnyError = (value: VoidFn) => {
  try {
    value();
    return false;
  } catch (err) {
    return true;
  }
};

export const throwsErrorOfType = curry<string, VoidFn, boolean>((type: string, value: VoidFn) => {
  try {
    value();
    return false;
  } catch (err) {
    return err.name === type;
  }
});
