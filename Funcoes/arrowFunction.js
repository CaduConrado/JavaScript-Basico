//Arrow Function

const arrowFunction = idade => `Eu tenho ${idade} anos.`;

const multiplica = (number1, number2) => number1 * number2;

const verificaMaiorIdade = (idade) => {
    if (idade >= 18) {
        return 'Maior de Idade';
    } else {
        return 'Menor de Idade';
    }
}

console.log(verificaMaiorIdade(20))