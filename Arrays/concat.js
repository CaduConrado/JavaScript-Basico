const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

//metodo concat() que junta dois arrays
console.log(array1.concat(array2));

//o metodo concat não altera o valor do primeiro array.
const newArray = array1.concat(array2);

console.log(newArray);