let numero = 20;
const pi = 3.1415;

// const nomeDoUsuario = prompt('Qual o seu nome?');

// console.log(nomeDoUsuario?.toUpperCase());

const numeros: number[] = [1, 2, 3, 4, 5];

const misto: (number | string)[] = ['Argeu', 24, 1.75];

const numerosDois: Array<number> = [99, 88, 77];

/* Hof : High Order Function   */
const idades: number[] = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);

const menoresDeIdade = idades.filter((idades) => idades < 18.0);
console.log("Menores de idade -> " + menoresDeIdade);


const pessoaTupla: [String, number] = ['Argeu', 24];

const pessoa = {
    nome: 'Argeu',
    idade: 24,
    profissao: 'Desenvolvedor',
    altura: 1.75
}

