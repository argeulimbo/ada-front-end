/* 
    Promises

    * É um objeto que guarda uma promessa de que algo será realizado.
    * Útil para lidar com operações assíncronas.
    * 
    * Estados: 
       I. Pending - iniciada, mas pendente
       II. Fullfilled - concretizada
       III. Rejected - rejeitado por erro

    * Exemplo -> pegar dados do back-end (API).
*/

const fs = require('fs');


function lerArquivoPromise() {
    return new Promise((resolve, reject) => { 
    fs.readFile('./javascript-avançado/arquivo.txt', (erro, conteudo) => {
        if (erro) {
            reject('Ocorreu um erro ao tentar ler o arquivo: ' + erro);
        } else {
            console.log(" - - - Lendo arquivo - - - ");
            console.log(String(conteudo));
        }
    });
});
}

/* 
    * then()
   * Promise().then((retornoResolveDaPromise) => {}) 
*/

lerArquivoPromise().then((retornoResolveDaPromise) => { 
    console.log('Deu certo: ', retornoResolveDaPromise);
})
    .catch((erro) => {
    console.log('Deu ruim: ', erro);
})
    .finally(() => {
        console.log('Isso aqui vai ser executado independente do sucesso ou fracasso da promessa.');
});

/* 
    3. async/await
*/

async function leituraDados() {
    console.log('Isso é executado antes da promise ser RESOLVIDA!');

    await lerArquivoPromise();

    console.log('Isso é executado DEPOIS da promise ser resolvida');
}

leituraDados();