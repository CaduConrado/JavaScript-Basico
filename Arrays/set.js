const nome = ["Pedro", "Felipe", "Felipe", "Julia", "Julia", "Cadu", "Cadu"];

const set = new Set(nome);
const nomeUpdate = [...set];

//voce também pode usar assim:
//const nomeUpdate = [...new Set(nome)];

console.log(nomeUpdate);
