const sampleText = "javascript este minunat";
const sampleDictionary = ["este"];

const cenzureaza = (text, dictionary) => {
  let rezultat = text;

  for (const cuvant of dictionary) {
    const regex = new RegExp(`\\b${cuvant}\\b`, "gi");
    rezultat = rezultat.replace(regex, (match) => {
      const lungime = match.length;
      if (lungime <= 2) {
        return "*".repeat(lungime); // daca e prea scurt, cenzuram tot
      }
      return match[0] + "*".repeat(lungime - 2) + match[lungime - 1];
    });
  }

  return rezultat;
};

console.log(cenzureaza("javascript este misto", ["este"]));
console.log(cenzureaza("este sau nu este", ["este"]));
console.log(cenzureaza("ana are mere", ["ana", "mere"]));
console.log(cenzureaza("da nu poate", ["da", "nu"]));
console.log(cenzureaza("bun", ["bun"]));
