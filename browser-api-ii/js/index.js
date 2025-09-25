/* Browser API - Escuta de Eventos e Estilos */

const aumentar = document.querySelector('#aumentar-botao');
const diminuir = document.querySelector('#diminuir-botao');
const resetar = document.querySelector('#resetar-botao');
const input = document.querySelector('#input');

const contagem = document.querySelector('#contador');
console.log(contagem.innerHTML);

aumentar.addEventListener('click', (event) => {
    const valorAtual = Number(contagem.textContent);
    contagem.textContent = valorAtual +1;
    aumentar.classList.add('btnClick');
    diminuir.classList.remove('btnClick');
    resetar.classList.remove('btnClick');
});

diminuir.addEventListener('click', (event) => {
    const valorAtual = Number(contagem.textContent);
    contagem.textContent = valorAtual -1;
    diminuir.classList.add('btnClick');
    aumentar.classList.remove('btnClick');
    resetar.classList.remove('btnClick');
});

resetar.addEventListener('click', (event) => {
    const valorAtual = Number(contagem.textContent);
    contagem.textContent = 0;
    resetar.classList.add('btnClick');
    aumentar.classList.remove('btnClick');
    diminuir.classList.remove('btnClick');
})

input.addEventListener('input', (event) => {
    console.log('" ' + input.value + ' "');
});

// Adicionando estilos inline no elemento contagem

contagem.style.color = 'red';
contagem.style.padding = '0 2rem';
contagem.style.border = '1px solid #AAA';
contagem.style.width = '200px';

// Manipular classes
// Adicionando class ao button usando JS
aumentar.classList.remove('btn');

// Remover class ao button usando JS
aumentar.classList.add('btn')

// Tema Dark
let darkTheme;

// Definindo uma função que será executada ao carregar o conteúdo da janela/página
window.onload = () => {
    const darkThemeStorage = localStorage.getItem('theme', darkTheme);

    const darktheme = darkThemeStorage === "true";
}

const themeButton = document.querySelector('#theme');
themeButton.addEventListener('click', (event) => {
   darkTheme = !darkTheme;

   localStorage.setItem('theme', darkTheme);

   const body = document.querySelector('body');

   if (darkTheme) {
       body.style.backgroundColor = 'rgb(29, 29, 32)';
       body.style.color = 'white';
   }
   else { 
       body.style.backgroundColor = 'white';
       body.style.color = 'rgb(29, 29, 32)';
   }


})

/* Client-Side Storage

 - Personaliza preferências do site (temas)
 - Atividade anterior persistente do site: carrinho de compras de uma sessão anterior
 - Salvar dados localmente para o download ser mais rápido
 - Salvar localmente documentos gerados durante o uso para uso offline

    > Tipos existentes: Cookies, Local Storage e Session Storage.

    > Métodos: setItem, getItem, removeItem, clear
*/

