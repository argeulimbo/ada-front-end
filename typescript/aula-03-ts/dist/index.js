"use strict";
let numero = 20;
const pi = 3.1415;
// const nomeDoUsuario = prompt('Qual o seu nome?');
// console.log(nomeDoUsuario?.toUpperCase());
const numeros = [1, 2, 3, 4, 5];
const misto = ['Argeu', 24, 1.75];
const numerosDois = [99, 88, 77];
/* Hof : High Order Function   */
const idades = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);
const menoresDeIdade = idades.filter((idades) => idades < 18.0);
console.log("Menores de idade -> " + menoresDeIdade);
const pessoaTupla = ['Argeu', 24];
const pessoaInterface = {
    nome: 'Argeu',
    idade: 24,
    profissao: 'Desenvolvedor',
    altura: 1.75
};
const pessoaType = {
    nome: 'Ailton',
    idade: 53,
    profissao: 'Suporte',
    altura: 1.73
};
// Union Types
// Na function abaixo "escolhaNumero", eu recebo 2 números e um parâmetro opcional criterio
// Caso critério = greater (maior), então retorna -> Se N1 maior que N2 retorne N1 (pois é o maior)
// Caso critério = lower, segue a lógica inversa retornando o menor
function chooseNumber(n1, n2, criterio) {
    switch (criterio) {
        case 'greater':
            return n1 > n2 ? n1 : n2;
        case 'lower':
            return n1 < n2 ? n1 : n2;
        default:
            const numeroRandom = Math.random();
            if (numeroRandom >= 0.5)
                return n1;
            return n2;
    }
}
const greaterNumber = chooseNumber(10, 2, 'greater');
const lowerNumber = chooseNumber(10, 2, 'lower');
console.log('Maior número => ' + greaterNumber);
console.log('Menor número => ' + lowerNumber);
// Function Somar
function somar(num1, num2) {
    return num1 + num2;
}
console.log('Function soma -> ' + somar(23, 42));
const outraPessoa = {};
const pessoas = {
    '118.375.236-90': {
        nome: 'Argeu',
        idade: 24,
        altura: 1.75,
        profissao: 'Desenvolvedor'
    }
};
//# sourceMappingURL=index.js.map