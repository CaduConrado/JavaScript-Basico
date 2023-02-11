const alunos = ["Joao", "Fabricio", "Pedro", "Feranando"];
const medias = [10, 8, 5.8, 7.8];

const reprovados = alunos.filter((_, index) => {
  return medias[index] < 6;
});

console.log(reprovados);
