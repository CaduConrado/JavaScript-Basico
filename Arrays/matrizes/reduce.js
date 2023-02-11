const notas1 = [10, 8, 6.5, 10, 7.5];
const notas2 = [6.0, 5, 7.4, 10, 9];
const notas3 = [7, 9, 10, 4, 8];

const notasGeral = [notas1, notas2, notas3];

function calcMedia(notas) {
  //o primeiro parametro da nossa funcao callback será a nossa contagem inicial
  //no caso será zero, o segundo parametro do reduce
  const somaNotas = notas.reduce((count, nota) => {
    return count + nota;
  }, 0);
  const media = somaNotas / notas.length;

  return media;
}

for (let i = 0; i < 3; i++) {
  console.log(`Media sala${i + 1}: ${calcMedia(notasGeral[i])}`);
}
