/*
    Object Literal in JavaScript
*/

const array = ["Argeu", 23, 1.73, true];

const pessoa = {
    nome: "Argeu",
    idade: 23,
    altura: 1.73,
    ativo: true,
    habilidades: ["JavaScript", "Java", "PostgreSQL"],
    fraseApresentacao() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e minha altura é ${this.altura}m.`;
    },
    fraseEfeito () {
        return "O COISA RUIM VOLTOU";
    },
    setNome(novoNome = "Valor Padrão") {
        this.nome = novoNome;
        return this.nome;
    }
}

// Acessando e manipulando propriedades do objeto
console.log(pessoa); // objeto completo
console.log("Nome da pessoa - " + pessoa.nome);  // acesso a propriedade nome
console.log("Idade - " + pessoa["idade"]);  // acesso a propriedade idade
console.log("Primeira Habilidade - " + pessoa.habilidades[0]);  // acesso ao primeiro elemento do array de habilidades

// Manipulando propriedades do objeto - BRUTE MANIPULATION
pessoa.nome = "Argeu Souza";
console.log("Nome Brute Manipulation: " + pessoa.nome);

// Manipulando propriedades do objeto - FUNCTIONAL MANIPULATION
pessoa.setNome("Arthur Torres");
console.log("Nome atualizado usando setNome: " + pessoa.nome);

// Atualizando o nome da pessoa usando a função setNome com valor padrão
pessoa.setNome();
console.log("Nome atualizado com valor padrão: " + pessoa.nome);

pessoa.setNome("Argeu Phelipe de Souza");

// Chamando métodos do objeto
console.log(pessoa.fraseApresentacao()); // Chamada do método fraseApresentacao
console.log(pessoa.fraseEfeito()); // Chamada do método fraseEfeito