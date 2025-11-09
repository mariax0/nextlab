const sampleArray = [1, 2, 3, 4, 5];

const reduce = (array, reducer, initialValue) => {
  let acc = initialValue !== undefined ? initialValue : array[0];
  const startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < array.length; i++) {
    acc = reducer(acc, array[i], i, array);
  }

  return acc;
};

console.log(reduce(sampleArray, (acc, curr) => acc + curr, 0));
console.log(reduce(sampleArray, (acc, curr) => acc * curr, 1));
console.log(reduce(sampleArray, (acc, curr) => (acc > curr ? acc : curr)));
console.log(reduce([1], (acc, curr) => acc + curr, 10));
console.log(reduce([], (acc, curr) => acc + curr, 100));
