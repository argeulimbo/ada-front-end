/*
        Array.protype.every(): verificar se TODOS os elementos de um Array atendem a uma condição
*/

const numeros = [40, 34, 67, 89, 23, 10];

const numerosPositivos = numeros.every((elemento) => elemento > 0);   // Verifica se todos os números são maiores que 0
console.log("numeros positivos: " + numerosPositivos);

const pessoas = [ 
    {
        nome: 'Marcia',
        idade: 28,
        altura: 1.57
    },
    {
        nome: 'Joao',
        idade: 38,
        altura: 1.72
    },
    {
        nome: 'Marcelo',
        idade: 22,
        altura: 1.80
    }
];

const maioresDeIdade = pessoas.every((pessoa) => pessoa.idade > 18); // Verifica se todas as pessoas são maiores de idade
console.log("maiores de idade: " + maioresDeIdade);

/*
        3. Array.prototype.some(): verificar se PELO MENOS UM elemento de um Array atende a uma condição
*/

const numeros2 = [-1, 3, 7, -3, 5];
const pessoas2 = [
    {
        nome: 'Arthur',
        idade: 33,
        altura: 1.75
    },
    {
        nome: 'Ana',
        idade: 25,  
        altura: 1.68
    },
    {
        nome: 'Carlos',
        idade: 19,
        altura: 1.80
    }
];

const retorno = numeros.some((numero) => numero > 0); // Verifica se pelo menos um número é maior que 0
console.log("algum numero positivo: " + retorno);

const retorno2 = pessoas2.some((pessoa) => pessoa.altura > 1.79); // Verifica se pelo menos uma pessoa tem altura maior que 1.79
console.log("alguma pessoa com altura maior que 1.79: " + retorno2);