//O forEach() deve receber uma função que recebe um elemento, essa funcao é chamada de callback

const notas = [10, 8, 6.5, 10, 7.5];
let somaNotas = 0;

//Callback -> Quando uma funcao é parametro de outra
//Para cada elemento da array a funcao anonima sera chamada
notas.forEach(function (nota) {
  somaNotas += nota;
});

const media = somaNotas / notas.length;

console.log(`Media das notas: ${media}`);
