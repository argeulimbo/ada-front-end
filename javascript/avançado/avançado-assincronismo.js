const fs = require('fs');

// * 1. Callbacks

// a) readFile()  = Função assincrona (ler um arquivo leva um tempo)

fs.readFile('./javascript-avançado/arquivo.txt', (erro, conteudo) => {
    if (erro) {
        console.log('Ocorreu um erro ao tentar ler o arquivo: ' + erro);
    } else {
        console.log(" - - - Lendo arquivo - - - ");
        console.log(String(conteudo));
    }
});

// b) setTimeout()  = Função que cria um timer (em milisegundos)

setTimeout(() => {
    console.log('Executando setTimeout() após 2 segundos.');
}, 2 * 1000)