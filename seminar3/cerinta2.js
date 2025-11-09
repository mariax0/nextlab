const sumaDivizibile = (arr, divisor) => {
  return arr
    .filter((num) => num % divisor === 0)
    .reduce((acc, curr) => acc + curr, 0);
};

console.log(sumaDivizibile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(sumaDivizibile([10, 15, 20, 25, 30], 5));
console.log(sumaDivizibile([7, 14, 21], 7));
console.log(sumaDivizibile([1, 2, 3], 4));
console.log(sumaDivizibile([], 2));
