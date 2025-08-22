/* 
    Acesso a API do ViaCEP por Fetch API
    * fetch() é uma função!
    * Seu retorno é uma Promessa (promise), logo, não é instantêanea!
*/

// Utilizando - then / catch
fetch('https://viacep.com.br/ws/32920000/json').then((response) => {
    response.json().then((dados) => console.log(dados));
}).catch((error) => {
    console.log(error);
});

// Utilizando - async / await
async function obterDadosCep() {
    const response = await fetch('https://viacep.com.br/ws/32920000/json');
    const dados = await response.json();
    console.log(dados);
}

obterDadosCep();