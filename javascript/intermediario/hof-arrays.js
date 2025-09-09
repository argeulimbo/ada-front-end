/*
    Funções de Alta Ordem (HOF) - Arrays
*/


// Array de números
const numeros = [40, 34, 67, 89, 23, 10];

// Usando forEach para iterar sobre o array
function printElement(elemento) {
    console.log(elemento);
}

numeros.forEach(printElement);
// Usando forEach com uma função anônima
numeros.forEach(element => console.log(element)); 

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