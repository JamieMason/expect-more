export const keys = (object: object): string[] => {
  const returnValue = [];
  for (const key in object) {
    if ({}.hasOwnProperty.call(object, key)) {
      returnValue.push(key);
    }
  }
  return returnValue;
};
