const increaseSalary = (salarii, procent) => {
  if (!Array.isArray(salarii)) {
    throw new Error("Primul parametru trebuie sa fie un array!");
  }

  if (typeof procent !== "number" || isNaN(procent)) {
    throw new Error("Al doilea parametru trebuie sa fie un numar!");
  }

  return salarii.map((salariu) => {
    if (typeof salariu !== "number" || isNaN(salariu)) {
      throw new Error("Toate salariile trebuie sa fie numere!");
    }
    return salariu + (salariu * procent) / 100;
  });
};

// teste
try {
  const salarii = [1000, 2000, 3000];
  console.log(increaseSalary(salarii, 10));
  console.log(increaseSalary([500], 5));
  increaseSalary("nu array", 10); // eroare 1
} catch (err) {
  console.log(err.message);
}

try {
  increaseSalary([1000, 2000], "10%"); // eroare 2
} catch (err) {
  console.log(err.message);
}

try {
  increaseSalary([1000, "2000"], 10); // eroare 3
} catch (err) {
  console.log(err.message);
}
