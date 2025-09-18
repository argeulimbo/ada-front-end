"use strict";
// Aula POO - Typescript
// Classe: abstração
// Definindo abstração de uma pessoa
class Pessoa {
    constructor(nome, idade, altura, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._cpf = cpf;
    }
    get cpf() {
        return this.cpf;
    }
    set cpf(newCpf) {
        if (newCpf.length !== 14) {
            throw new Error('CPF length is incorrect!');
        }
        this._cpf = newCpf;
    }
    dormir() {
        console.log('Dormindo...');
    }
}
// Criando uma pessoa (objeto) a partir da classe Pessoa (abstração)
const pessoa1 = new Pessoa('Argeu', 24, 1.80, '118.375.236-90');
const pessoa2 = new Pessoa('Ailton', 53, 1.75, '200.987.999-08');
console.log(pessoa1);
console.log(pessoa2);
//# sourceMappingURL=index.js.map