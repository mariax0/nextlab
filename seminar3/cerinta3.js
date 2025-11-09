const format = (template, values) => {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return key in values ? values[key] : match;
  });
};

// teste
console.log(
  format("Un {substantiv} este {adjectiv}.", {
    substantiv: "calut",
    adjectiv: "dragut",
  })
);

console.log(
  format("Buna, {nume}! Ai {varsta} mere.", { nume: "Ana", varsta: 5 })
);

console.log(format("Text fara {placeholder}.", {}));
