/*
    Funções de Alta Ordem (HOF) - Arrays
*/

/*
        1. Array.prototype.forEach()
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

console.log("2. Array.prototype.find(): útil para encontrar um elemento em um Array")
/*
        2. Array.prototype.find(): útil para encontrar um elemento em um Array
*/

const encontrado = numeros.find((numero) => {
    return numero > 10;
})

console.log("Usying find - " + encontrado);

// Array de objetos
const pessoas = [ 
    {
        nome: 'Marcia',
        idade: 28,
        sistema: 'GFP'
    },
    {
        nome: 'Joao',
        idade: 38,
        sistema: 'GSP'
    },
    {
        nome: 'Marcelo',
        idade: 22,
        sistema: 'TRB'
    }
];

const pessoaEncontrada = pessoas.find((pessoa) => pessoa.nome == 'Marcia');
console.log(pessoaEncontrada)

/*
        2. Array.prototype.findIndex(): útil para encontrar um elemento especificado por Index
*/

const pessoaEncontradaFindIndex = pessoas.find((pessoa) => pessoa.nome == 'Tutui');
console.log(pessoaEncontradaFindIndex)