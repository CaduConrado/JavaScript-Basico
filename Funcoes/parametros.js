//definindo valor padrão para os parametros
function multiplica(number1 = 1, number2 = 1) {
    return number1 * number2
}

//apenas o primeiro parametro terá seu valor substituído
console.log(multiplica(7));

