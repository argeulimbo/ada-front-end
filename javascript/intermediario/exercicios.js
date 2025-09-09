/* 
        Exercício 1
Crie um código que obtenha apenas os dados dos alunos que têm uma média superior a 85.
Em seguida, imprima os dados deles na tela.

*/

console.log('- - - EXERCÍCIO 1 - - -');
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
// Usando filter
const mediaSuperiorMap = alunos.filter((alunos) => alunos.media > 85);
console.log(mediaSuperiorMap)

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* 
        Exercício 2
Crie um script para filtrar apenas pelos produtos que custam menos de R$ 10,00 e não são bebidas.

// Usando map + filter
const mediaSuperiorMap = alunos.map((media) => {
        alunos.filter(media > 85);
})
*/
console.log(" - - - EXERCÍCIO 2 - - -");
// Criação do Array
const produtos = [
        { nome: 'Suco de laranja', preco: 7.50, tipo: 'bebida' },
        { nome: 'Batata frita', preco: 10.50, tipo: 'comida' },
        { nome: 'Pizza', preco: 12.49, tipo: 'comida' },
        { nome: 'Chocolate', preco: 1.50, tipo: 'comida' },
        { nome: 'Pastel', preco: 4.50, tipo: 'comida' }        
];
// Usando Filter
const comidasDeDez = produtos.filter((produtos) => produtos.preco < 10 && produtos.tipo == 'comida');
console.log(comidasDeDez);

console.log(mediaSuperiorMap);