/* 1. First Class Function
    - Função pode ser passada como parâmetro para outra função, assim como pode ser retornada por outra função. 
    - E seu retorno pode ser atribuído a uma variável.
*/

function welcome(courseName) {
    return (studentName) => {
        console.log(`Bem-vindo ao curso de ${courseName}, ${studentName}!`);
        
    }
}

welcome("JavaScript")("João"); // Bem-vindo ao curso de JavaScript, João!

/* 2. Higher Order Function
    - Função que recebe outra função como parâmetro ou retorna uma função.
*/