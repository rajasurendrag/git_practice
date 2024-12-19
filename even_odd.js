const isEven = function (number) {
  return number % 2 === 0;
};

const func = function (a, b) {
  if (isEven(a) === isEven(b)) {
    return a - b;
  }

  return !isEven(a) ? -1 : 1;
};