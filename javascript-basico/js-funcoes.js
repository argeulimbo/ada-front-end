/* Exemplos de funções em JavaScript
   - Funções com parâmetros e retorno
   - Funções anônimas
   - Funções arrow (seta)
   - Funções com valores padrão
*/

/* 
                    STRINGS
*/

function saudacao(nome="Usuário", curso="JavaScript") {
    return `Ola, ${nome}! Bem-vindo ao curso de ${curso}.`;
}

const msg = saudacao();
console.log(msg);

/*   
                    Números
*/

function somar(n1, n2) {
    return n1 + n2;
}

const resultado = somar(5, 10);
console.log(`A soma é: ${resultado}`);
console.log(resultado / 2); // Exemplo de divisão do resultado

/*
                    Função Anônima
    - Atribuição a uma variável 
*/

const dobroDoNumero = function(numero) {
    return numero * 2;
}
console.log(dobroDoNumero(5)); // Exemplo de chamada da função anônima

/*
                    Exemplo 4 - Função Arrow (Seta)
*/
const subtrair = (n1, n2) => { 
    return n1 - n2;
}

const multiplicar = (n1, n2) => {
    if (n1 < 0) console.log("O primeiro número é negativo.");

    return n1 + n2;
}