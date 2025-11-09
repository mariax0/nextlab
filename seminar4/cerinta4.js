Number.prototype.times = function (callback) {
  const n = Math.floor(this.valueOf());
  if (n < 0) {
    return this;
  }

  for (let i = 0; i < n; i++) {
    callback(i);
  }
};

// teste
(3).times(console.log);
(5).times((i) => console.log(`Executie #${i + 1}`));
(0).times(() => console.log("Nu se executa"));
(-1).times(() => console.log("Nu ar trebui sa apara"));

let sum = 0;
(4).times((i) => (sum += i + 1));
console.log(sum);
