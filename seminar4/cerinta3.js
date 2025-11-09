function powRec() {
  const mem = {};

  const pow = (base, exp) => {
    if (exp === 0) {
      return 1;
    }

    const key = `${base}^${exp}`;

    if (key in mem) {
      console.log(`${key} GASIT.`);
      return mem[key];
    } else {
      mem[key] = base * pow(base, exp - 1);
      console.log(`${key} CALCULAT.`);
      return mem[key];
    }
  };

  return pow;
}

const pow = powRec();

console.log(pow(2, 0));
console.log(pow(2, 1));
console.log(pow(2, 5));
console.log(pow(2, 3));
console.log(pow(3, 4));
