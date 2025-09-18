"use strict";
// Aula POO - Typescript
Object.defineProperty(exports, "__esModule", { value: true });
// Classe: abstração
// Definindo abstração de uma pessoa
class Pessoa {
    nome;
    idade;
    altura;
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    dormir() {
        console.log('Dormindo...');
    }
    toString() {
        console.log('NOME: ' + this.nome + ' | Idade: ' + this.idade + ' | Altura: ' + this.altura);
    }
}
// Criando uma pessoa (objeto) a partir da classe Pessoa (abstração)
const pessoa1 = new Pessoa('Argeu', 24, 1.80);
console.log(pessoa1.toString());
//# sourceMappingURL=index.js.map