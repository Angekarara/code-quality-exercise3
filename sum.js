const sum = (array) =>
  array.length !== 0 ? array[0] + sum(array.slice(1)) : 0;
