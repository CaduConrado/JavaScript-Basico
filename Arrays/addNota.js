const notas = [9, 8, 7];

//metodo push -> coloca um novo elemento no array
//eu consigo alterar meu array 'notas' mesmo sendo const pq estou usando .push que é um metodo proprio da variável
notas.push(10);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);