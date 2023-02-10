const notas1 = [10, 8, 6.5, 10, 7.5];
const notas2 = [6.0, 5, 7.4, 10, 9];
const notas3 = [7, 9, 10, 4, 8];
let somaNotas = 0;
let somaNotasGeral = 0;
let qtdNotasGeral = 0;
//Laço de repetiçao for
//Recebe um index inicial  // enquanto esse index for menor que o tamanho do array // irá somar +1 no index
for (let index = 0; index < notas1.length; index++) {
  //para cada iteração irá somar o valor do próximo elemento com o resultado da iteracao anterior
  somaNotas += notas1[index];
}

let media = somaNotas / notas1.length;

console.log(media);

const notasGeral = [notas1, notas2, notas3];

for (let i = 0; i < notasGeral.length; i++) {
  for (let j = 0; j < notasGeral.length; j++) {
    somaNotasGeral += notasGeral[i][j];
    qtdNotasGeral++;
  }
}

let mediaGeral = somaNotasGeral / qtdNotasGeral;
console.log(mediaGeral);
