"use strict";
/* Aula POO - Typescript

// Classe: abstração
// Definindo abstração de uma pessoa  */
class Pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    dormir() {
        console.log('Dormindo...');
    }
}
// Criando uma pessoa (objeto) a partir da classe Pessoa (abstração)
const pessoa1 = new Pessoa('Argeu', 24, 1.80);
console.log(pessoa1);
//# sourceMappingURL=index.js.map