/*
        Map
        Retorna um Array novo resultante da aplicação de uma função a cada elemento do Array original.
        Cria um novo Array com o mesmo número de elementos do Array original.
*/

const numeros = [40, 34, 67, 89, 23, 10];

const novoArray = numeros.map((numero, index, array) => {
    return numero ++ // Incrementa cada elemento em 1
});
console.log("Array A = " + novoArray);

// Exemplo 1 - Elevando todos os números ao quadrado

const valores = [1, 2, 3, 4, 5];
valores.map((valor) => valor ** 2); // Eleva cada elemento ao quadrado
console.log("Array B = " + valores);

// Exemplo 2 - Adicionando uma propriedade a cada objeto em um array de objetos
const carrinho = [ 
    { produto: 'feijão', preco: 7.99, quantidade: 3 },
    { produto: 'arroz', preco: 5.49, quantidade: 2 },
    { produto: 'macarrão', preco: 4.99, quantidade: 1 },
    { produto: 'leite', preco: 3.49, quantidade: 4 }
];
/*              
                    Adiciona a propriedade total ao objeto                                                                   
*/
const carrinhoTotal = carrinho.map((itemCarrinho) => {
    return {
        ...itemCarrinho,
        total: itemCarrinho.preco * itemCarrinho.quantidade
    };
});

console.log(carrinhoTotal)