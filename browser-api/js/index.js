/* 
        DOCUMENT: Seletores
    1. document.getElementsByTagName(nomeDaTag)
    2. document.getElementsByClassName(nomeDaClasse)
    3. document.getElementById(id)
    4. document.getElementByName(name)
    5. document.querySelector(seletor)
    6. document.querySelectorAll(seletor)

*/

// Pelo TagName - H1 e P
const allH1 = document.getElementsByTagName("h1");
console.log(allH1[0]);

const allP = document.getElementsByTagName("p");
console.log(allP);

// Pelo Name - email
const nameEmail = document.getElementsByName("email");
console.log(nameEmail);

// Pelo Id - logo
const logoId = document.getElementById("js-logo");
console.log(logoId);

// QuerySelector
const imagem = document.querySelector("body > img#js-logo");
console.log(imagem);
const primeiroParagrafo = document.querySelector("p.paragrafo");
console.log(primeiroParagrafo);

// QuerySelectorAll
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);

// Text Content e InnerHTML
console.log("textContent: ", primeiroParagrafo.textContent);
console.log("innerHTML: ", primeiroParagrafo.innerHTML);

// Text Content = tudo é texto
// InnerHTML = insere tags html dentro da string