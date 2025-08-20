/*    ESLINT - Biblioteca para Desenvolvimento 
     - Aplicação de regras
     - npm install eslint -D
*/

const aula = "JSON";
const ferramenta = 'eslint';
const fs = require('fs');

// 1. Lendo um arquivo JSON.

fs.readFile('./eslint.json', (erro, dados) => {
     if (erro) {
          console.log('Erro ao ler o arquivo - ' + erro);
     } else {
          // dados: Buffer com os dados do arquivo json
          console.log(JSON.pase(dados));
          console.log(typeof dados);
     }
}); 

// Convertendo JSON, em formato de string, para um objeto
const jsonString = '{"nome": "Wallisson"}';
console.log(JSON.parse(jsonString));

// Convertendo um objeto do JS, em um JSON (String)

const pessoa = {
     nome: 'Tony Stark',
     papel: 'Homem de Ferro',
};

console.log(JSON.stringify(pessoa));