const alunos = ["Pedro", "João", "Felipe", "Carlos"];
const mediaFinal = [10, 9.5, 7, 8];

const alunosMedia = [alunos, mediaFinal];

function exibeAluno(aluno) {
  //   const alunos = alunosMedia[0];
  //   const medias = alunosMedia[1];

  //Destructuring
  const [alunos, medias] = alunosMedia;
  if (alunos.includes(aluno)) {
    const indice = alunos.indexOf(aluno);

    const mediaAluno = medias[indice];

    console.log(`O aluno ${aluno} tem média ${mediaAluno}`);
  } else {
    console.log(`${aluno} não está na lista`);
  }
}

exibeAluno("Carlos");
