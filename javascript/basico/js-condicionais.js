const prompt = require('readline-sync');    

let userNumber = Number(prompt("Digite um número entre 0 e 10:"));

while (sortNumber != userNumber) {
    console.log("Você errou! Tente novamente.");
    userNumber = Number(prompt("Digite um número entre 0 e 10:"));
}