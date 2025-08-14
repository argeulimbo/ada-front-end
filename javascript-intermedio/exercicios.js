/* 
        Exercício 1
Crie um código que obtenha apenas os dados dos alunos que têm uma média superior a 85.
Em seguida, imprima os dados deles na tela.

*/

// Criação do Array
const alunos = [
        { nome: 'Quincy', media: 96 },
        { nome: 'Jason', media: 84 },
        { nome: 'Alexis', media: 100 },
        { nome: 'Sam', media: 65 },
        { nome: 'Katie', media: 90 }        
];

// Usando apenas filter  = resultado falho
const mediaSuperior = alunos.filter((media) => media > 85);
console.log(mediaSuperior);

// Usando map + filter
const mediaSuperiorMap = alunos.map((media) => {
        alunos.filter(media > 85);
})

console.log(mediaSuperiorMap);