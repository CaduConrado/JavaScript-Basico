const jogadoresTransferencia = ["Felipe Bastos", "Ralph", "Diego", "Pintado"];

console.log(jogadoresTransferencia);

//metodo splice altera o array original, nesse caso estou adicionando 3
//elementos a partir do indice 1 e substituindo pelo passado no parametro
jogadoresTransferencia.splice(1, 3, "Goulart");

console.log(jogadoresTransferencia);
