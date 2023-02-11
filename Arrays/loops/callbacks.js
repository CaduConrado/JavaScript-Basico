const nome = ["Cadu", "Lucas", "Gustavo"];

//utilizando ArrowFunction na funcao callback
nome.forEach((nome) => {
  console.log(nome);
});

function printNome(nome) {
  console.log(nome);
}

nome.forEach(printNome);
