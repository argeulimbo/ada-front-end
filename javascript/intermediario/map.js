/*
        Map
        Retorna um Array novo resultante da aplicação de uma função a cada elemento do Array original.
*/

const numeros = [40, 34, 67, 89, 23, 10];

const novoArray = numeros.map((numero, index, array) => {
    if (numero == 10 || numero < 25 && numero > 1) {
        return numero++;
    }
//  return numero * 2; // Multiplica cada elemento por 2;
//  return numero ++ // Incrementa cada elemento em 1
//  return array[index] // Retorna o elemento original
});

console.log(novoArray);