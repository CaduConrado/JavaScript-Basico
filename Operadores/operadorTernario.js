const mediaEscolar = 6;
const notaAluno = 5;


// Operador if e else
if (notaAluno >= mediaEscolar) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

// Operador ternário => Recomendado apenas para pequenas operações, com poucos retornos. 
console.log(notaAluno >= mediaEscolar ? 'Aprovado' : 'Reprovado');