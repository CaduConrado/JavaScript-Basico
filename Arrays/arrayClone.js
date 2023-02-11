const notas = [10, 7, 9.5, 8.8];

//utilizamos o operador do JS chamado spread operator
//ele pega todo o conteúdo da array notas e copia para notasUpdate, ele copia os dados e nao o endereco de memoria
const notasUpdate = [...notas];
notasUpdate.push(6);

//caso eu não queira realizar o push posso usar assim:

//const notasUpdate = [...notas, 6];

console.log(`Notas originais: ${notas}`);
console.log(`Notas atualizadas: ${notasUpdate}`);
