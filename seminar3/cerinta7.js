const calculeazaMedia = (arr) => {
  if (arr.length === 0) return 0;
  const suma = arr.reduce((acc, curr) => acc + curr, 0);
  return suma / arr.length;
};

console.log(calculeazaMedia([1, 2, 3, 4, 5]));
console.log(calculeazaMedia([10, 20, 30]));
console.log(calculeazaMedia([-1, 1]));
console.log(calculeazaMedia([]));
console.log(calculeazaMedia([5]));
