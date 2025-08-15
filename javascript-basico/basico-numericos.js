const prompt = require('readline-sync');

for (let i = 0; i <= 9; i+= 2) {
    console.log(i)
}

// let maiorNumero = 0;
// let numeroInformado;

// for (let i = 1; i <= 5; i++) {
//     numeroInformado = Number(prompt.question(('Informe um número positivo: ')));

//     if (numeroInformado > maiorNumero) {
//         maiorNumero = numeroInformado;
//     }
// }
// console.log("O maior número informado foi: " + maiorNumero);

// * Exemplo: percorrendo strings com o for

// const nome = "Walisson";

// for (let i = 0; i< nome.length; i++) {
//     console.log("Indice: " + i + " - Letra: " + nome[i]);
//     if (i == 4) {
//         break;
//     }
// }