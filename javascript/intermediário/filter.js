/*
            Filter
        * Função: encontra todos os elementos que satisfazem a condição
        * map(): sempre retorna um array do mesmo tamanho do original
        * find(): encontra o primeiro elemento que satisfaz a condição
        * filter(): encontra todos os elementos que satisfazem a condição
*/

// Array de exemplo
const numeros = [40, 34, 67, 89, 23, 10];

// Usando find() para encontrar APENAS o primeiro elemento que satisfaz a condição
const findPar = numeros.find((valor) => valor % 2 === 0);
console.log("find() -> " + findPar);

// Usando filter() para encontrar TODOS os elementos que satisfazem a condição
const filterPar = numeros.filter((valor) => valor % 2 === 0);
console.log("filter() -> " + filterPar);