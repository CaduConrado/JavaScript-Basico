const numerosPares = [4, 8, 10];
const numerosImpares = [5, 6, 3];

//pega todos os valores de numerosPares e numerosImpares e colocam numa mesma array
const numeros = [...numerosPares, ...numerosImpares];

console.log(numeros);

const [number1, number2, ...outrosNumeros] = [1, 2, 3, 4, 5, 6];

console.log(number1, number2, outrosNumeros);

// Destructuring para objetos
const pessoa = {
  nome: "Cadu",
  idade: 21,
};

const pessoaUpdate = { ...pessoa, telefone: "(xx) xxxxx-xxxx" };

console.log(pessoa, pessoaUpdate);

const { nome } = pessoa;

console.log(nome);

function exibeDados({ nome, telefone }) {
  console.log(nome, telefone);
}

exibeDados(pessoaUpdate);
