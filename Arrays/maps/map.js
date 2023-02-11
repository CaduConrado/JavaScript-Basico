const nota = [10, 6, 9.5, 7.4, 9];

const notaUpdate = nota.map((nota) => {
  return nota + 1 <= 10 ? nota + 1 : 10;
});

console.log(notaUpdate);
