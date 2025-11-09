const deepClone = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags);

  // Array sau Object?
  const clone = Array.isArray(obj) ? [] : {};

  // iterare
  for (const key of Object.getOwnPropertyNames(obj)) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, key);
    const value = obj[key];

    if (descriptor.get || descriptor.set) {
      Object.defineProperty(clone, key, descriptor);
    } else {
      clone[key] = deepClone(value);
    }

    Object.defineProperty(clone, key, {
      value: clone[key],
      writable: descriptor.writable,
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
    });
  }

  return clone;
};

// TESTE
const original = {
  a: 1,
  b: "text",
  c: [1, 2, { x: 10 }],
  d: { nested: { value: 42 } },
  e: null,
  f: undefined,
  g: new Date(),
  h: /regex/g,
  i: Symbol("test"),
  j: function () {
    return this.a;
  },
};

// adaugam o proprietate non-enumerabila
Object.defineProperty(original, "secret", {
  value: "hidden",
  enumerable: false,
});

const copie = deepClone(original);

console.log("Original:", original);
console.log("Copie:", copie);
console.log("Egalitate stricta:", original === copie); // false
console.log(
  "Egalitate continut:",
  JSON.stringify(original) === JSON.stringify(copie)
); // true
console.log("g instanceof Date: ", copie.g instanceof Date); // true
console.log("g.getTime(): ", copie.g.getTime()); // număr valid
console.log("h instanceof RegExp: ", copie.h instanceof RegExp); // true
console.log("h.toString(): ", copie.h.toString()); // /regex/g
console.log("typeof i:", typeof copie.i); // symbol
console.log("secret:", copie.secret); // hidden
console.log("j is function:", typeof copie.j === "function"); // true

// modificare an data
copie.g.setFullYear(2000);
console.log("g original:", original.g.getFullYear()); // 2025
console.log("g copie modificata:", copie.g.getFullYear()); // 2000

// modificare x in c
copie.c[2].x = 999;
copie.d.nested.value = 100;

console.log("c[2].x original:", original.c[2].x); // 10
console.log("c[2].x copie modificata:", copie.c[2].x);
