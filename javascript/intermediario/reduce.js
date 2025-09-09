/*
            Reduce
        * Função: executa em todos os elementos a função passada como parâmetro resultando em um elemento único
            - Usando em .: cálculo da soma dos elementos de um array
        * map(): sempre retorna um array do mesmo tamanho do original
        * find(): encontra o primeiro elemento que satisfaz a condição
        * filter(): encontra todos os elementos que satisfazem a condição
*/

// Array simples
const numeros = [ 1, 2, 3, 4, 5];

// Cálculo da soma dos elementos
const soma = numeros.reduce((acumulador, elemento) => {
    return elemento + acumulador;
});

console.log("Soma: " + soma);
console.log('-------');

// Cálculo da média da soma dos elementos
const media = numeros.reduce((acumulador, elemento, _, arrayCompleto) => {
    return (elemento / arrayCompleto.length) + acumulador;
}, 0);

console.log("Média: " + media);
console.log(" - - - ")

// Cálculo da soma dos pares
const somaPares = numeros.reduce((acumulador, elemento) => {
    // se n é par
    if (elemento % 2 === 0) {
        return elemento + acumulador;
    } else {
        return acumulador;
    }
}, 0);

console.log("Soma dos pares: " + somaPares);
console.log(" - - - ");

/* 
            EXEMPLO: Array de Objeto
*/

// Total a pagar do carrinho
const carrinho = [
    { produto: 'feijao', preco: 7.98, quantidade: 3 },
    { produto: 'arroz', preco: 4.98, quantidade: 5 },
    { produto: 'leite', preco: 6.99, quantidade: 2 }
];

const total = carrinho.reduce((acumulador, item) => {
    return (item.preco * item.quantidade) + acumulador;
}, 0);
console.log("Total a pagar : " + total);