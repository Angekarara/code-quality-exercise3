const checkPrimeNumber = (number) => {
  if (number <= 1) return false;
  if (number === 2) return true;
  return typeof number === "number"
    ? ![...Array(number).keys()].slice(2).some((i) => number % i === 0)
    : false;
};


