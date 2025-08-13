/*
    Funções de Alta Ordem (HOF) - Arrays
*/

// Array de números
const numeros = [40, 34, 67, 89, 23, 10];

// Usando forEach para iterar sobre o array
function printElement(elemento) {
    console.log(elemento);
}

// Usando forEach com uma função anônima usando 1 parâmetro de ELEMENTO
numeros.forEach(element => console.log(element)); 

// Usando forEach com uma função anônima usando 3 parâmetros de ELEMENTO, INDEX e o ARRAY COMPLETO
numeros.forEach((element, index, array) => {
    console.log(element, index, array);
})

console.log('---');

// Usando forEach com uma função definida
numeros.forEach(printElement);