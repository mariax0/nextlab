const aniNastere = [2000, 1995, 2010, 1987, 2005, 2018, 1999];

const varstePeste18 = aniNastere
  .map((an) => new Date().getFullYear() - an)
  .filter((varsta) => varsta > 18);

console.log(varstePeste18);
