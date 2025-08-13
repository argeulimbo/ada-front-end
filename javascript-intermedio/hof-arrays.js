/*
    Funções de Alta Ordem (HOF) - Arrays
*/

// Array de números
const numeros = [40, 34, 67, 89, 23, 10];

// Usando forEach para iterar sobre o array
function printElement(elemento) {
    console.log(elemento);
}

// Usando forEach com uma função anônima
numeros.forEach(element => console.log(element)); 

console.log('---');

// Usando forEach com uma função definida
numeros.forEach(printElement);