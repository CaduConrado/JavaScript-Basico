const emptyArray = [, , ,];
console.log(emptyArray);
console.log(emptyArray.length);

//isso significa que criamos nosso array, porém sem nenhum elemento na posicao i
console.log(emptyArray[0]);

emptyArray.push(10);

console.log(emptyArray);

//como usamos o .push() ele adicionou o elemento 10 na ultima posicao da array
//passando a ter 4 posicoes, porem apenas um elemento
//chamamos isso de Array Esparso
console.log(emptyArray.length);