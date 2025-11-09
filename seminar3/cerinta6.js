const sortByKey = (arr, key) => {
  return [...arr].sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
};

// teste
const persoane = [
  { nume: "Ana", varsta: 25 },
  { nume: "Bogdan", varsta: 30 },
  { nume: "Cristina", varsta: 20 },
  { nume: "Ana", varsta: 35 },
];

console.log(sortByKey(persoane, "nume"));
console.log(sortByKey(persoane, "varsta"));
console.log(persoane === sortByKey(persoane, "nume"));
