class EvenStream {
  #current;

  constructor(startValue) {
    this.#current = startValue % 2 === 0 ? startValue : startValue + 1;
  }

  get next() {
    const value = this.#current;
    this.#current += 2;
    return value;
  }
}

const evenFrom10 = new EvenStream(10);
const evenFrom11 = new EvenStream(11);

console.log("evenFrom10:");
for (let i = 0; i < 5; i++) {
  console.log(evenFrom10.next);
}

console.log("evenFrom11:");
for (let i = 0; i < 5; i++) {
  console.log(evenFrom11.next);
}
