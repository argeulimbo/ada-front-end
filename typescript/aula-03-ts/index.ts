let numero = 20;
const pi = 3.1415;

// const nomeDoUsuario = prompt('Qual o seu nome?');

// console.log(nomeDoUsuario?.toUpperCase());

const numeros: number[] = [1, 2, 3, 4, 5];

const misto: (number | string)[] = ['Argeu', 24, 1.75];

const numerosDois: Array<number> = [99, 88, 77];

/* Hof : High Order Function   */
const idades: number[] = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);

const menoresDeIdade = idades.filter((idades) => idades < 18.0);
console.log("Menores de idade -> " + menoresDeIdade);


const pessoaTupla: [String, number] = ['Argeu', 24];

// Object Types
// 1. Interface
// Usar ? após o atributo para indicar que é opcional -> profissao?: string  | logo após -> pessoa.profissao('Desenvolvedor')

interface PersonInterface {
    nome: string;
    idade: number;
    profissao: string;
    altura: number;
}

// 2. Type

type PersonType = { 
    nome: string;
    idade: number;
    altura: number;
    profissao?: string;
}

const pessoaInterface: PersonInterface = {
    nome: 'Argeu',
    idade: 24,
    profissao: 'Desenvolvedor',
    altura: 1.75
}

const pessoaType: PersonType = {
    nome: 'Ailton',
    idade: 53,
    profissao: 'Suporte',
    altura: 1.73
}

// Union Types
// Na function abaixo "escolhaNumero", eu recebo 2 números e um parâmetro opcional criterio
// Caso critério = greater (maior), então retorna -> Se N1 maior que N2 retorne N1 (pois é o maior)
// Caso critério = lower, segue a lógica inversa retornando o menor
function chooseNumber(n1: number, n2: number, criterio?: 'greater' | 'lower') {
    switch(criterio) {
        case 'greater':
        return n1 > n2 ? n1 : n2;

        case 'lower':
        return n1 < n2 ? n1 : n2;

        default: 
        const numeroRandom = Math.random();
            if (numeroRandom >= 0.5) return n1;
            return n2;
    }
}
const greaterNumber = chooseNumber(10, 2, 'greater');
const lowerNumber = chooseNumber(10, 2, 'lower');
console.log('Maior número => ' + greaterNumber);
console.log('Menor número => ' + lowerNumber);

// Function Somar
function somar(num1: number, num2: number): number {
    return num1 + num2;
}
console.log('Function soma -> ' + somar(23, 42));

// * Utility Types: A ideia deles é permitir que você crie novos tipos a partir de tipos já existentes

// 1. Partial: torna todos atributos como não obrigatórios
type PersonPartial = Partial<PersonType>;
const outraPessoa: PersonPartial = {
}

// 2. Required: torna todos atributos obrigatórios
type PersonRequired = Required<PersonType>;

// 3. Pick: escolhe o atributo que deseja obter da interface
type PersonPicked = Pick<PersonType, 'nome' | 'idade'>

// 4. Omit: esconda o atributo da interface
type PersonOmit = Omit<PersonType, 'profissao'>;

// 5. Exclude: excluir um parâmetro
type PersonExcluded = Exclude<PersonType, 'idade'>;

/* 6. Record: cria um tipo Objeto utilizando <chave, valorObjeto>
        exemplo abaixo:
        - cria um record de chave string e objeto PersonType
        - const pessoas => instanciação
        - chave em string => 118.375.236-90 referente a um documento como CPF
        - valor em objeto => nome, idade, altura, profissao
*/

type Pessoas = Record<string, PersonType>

const pessoas: Pessoas = {
    '118.375.236-90': {
        nome: 'Argeu',
        idade: 24,
        altura: 1.75,
        profissao: 'Desenvolvedor'
    }
}
