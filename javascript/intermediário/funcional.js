/* 1. First Class Function
    - Função pode ser passada como parâmetro para outra função, assim como pode ser retornada por outra função. 
    - E seu retorno pode ser atribuído a uma variável.
*/

function welcome(courseName) {
    return (studentName) => {
        console.log(`Bem-vindo ao curso de ${courseName}, ${studentName}!`);
    }
}

// Arrays de estudantes
const studentBack = ["Maria", "José", "Ana"];
const studentFront = ["João", "Pedro", "Lucas"];

// Função de boas-vindas para cada curso
const welcomeMsgFront = welcome("Front-end em JavaScript");
const welcomeMsgBack = welcome("Back-end em Java");

// Função para repetir a mensagem de boas-vindas para cada estudante do curso Front-end
function repeatWelcomeFront() {
    studentFront.forEach(student => {
        welcomeMsgFront(student);
    });
}

// Função para repetir a mensagem de boas-vindas para cada estudante do curso Back-end
function repeatWelcomeBack() { 
    studentBack.forEach(student => {
        welcomeMsgBack(student);
    });
}

repeatWelcomeBack();
repeatWelcomeFront();

/* 2. Higher Order Function
    - Função que recebe outra função como parâmetro ou retorna uma função.
*/

const somar = (n1, n2) => n1 + n2;
const subtrair = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1 / n2;

const calcular = (n1, n2, operacao) => operacao(n1, n2);

//const retorno = calcular(10, 5, somar);
//console.log(retorno);

// O cálculo que eu quero é: (n1 * n2) + (2 * n1 * n2)

const resultado = calcular(10, 5, (n1, n2) => n1 * n2 + (2 * n1 *n2));

console.log(resultado);