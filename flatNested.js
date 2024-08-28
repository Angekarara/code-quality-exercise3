const getNestedLevel = (arr) =>
  Array.isArray(arr) ? 1 + Math.max(0, ...arr.map(getNestedLevel)) : 0;

const flattenNestedArray = (array) =>
  getNestedLevel(array) ? array.flat() : array;
