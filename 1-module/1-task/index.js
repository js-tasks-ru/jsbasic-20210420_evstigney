'use strict';

let factorial = (n) => {
  let result = +n || 1;

  for (let i = result; i > 1; i--) {
    result *= i - 1;
  }

  return result;
};