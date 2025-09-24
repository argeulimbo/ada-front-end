/* Browser API - Escuta de Eventos e Estilos */

const aumentar = document.querySelector('#aumentar-botao');
const diminuir = document.querySelector('#diminuir-botao');
const input = document.querySelector('#input');

const contagem = document.querySelector('#contador');
console.log(contagem.innerHTML);

aumentar.addEventListener('click', (event) => {
    const valorAtual = Number(contagem.textContent);
    contagem.textContent = valorAtual +1;
});

diminuir.addEventListener('click', (event) => {
    const valorAtual = Number(contagem.textContent);
    contagem.textContent = valorAtual -1;
});

input.addEventListener('input', (event) => {
    console.log('" ' + input.value + ' "');
})