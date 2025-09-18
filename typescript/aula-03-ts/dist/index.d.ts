declare let numero: number;
declare const pi = 3.1415;
declare const numeros: number[];
declare const misto: (number | string)[];
declare const numerosDois: Array<number>;
declare const idades: number[];
declare const menoresDeIdade: number[];
declare const pessoaTupla: [String, number];
interface PersonInterface {
    nome: string;
    idade: number;
    profissao: string;
    altura: number;
}
declare type PersonType = {
    nome: string;
    idade: number;
    altura: number;
    profissao?: string;
};
declare const pessoaInterface: PersonInterface;
declare const pessoaType: PersonType;
declare function chooseNumber(n1: number, n2: number, criterio?: 'greater' | 'lower'): number;
declare const greaterNumber: number;
declare const lowerNumber: number;
declare function somar(num1: number, num2: number): number;
declare type PersonPartial = Partial<PersonType>;
declare const outraPessoa: PersonPartial;
declare type PersonRequired = Required<PersonType>;
declare type PersonPicked = Pick<PersonType, 'nome' | 'idade'>;
declare type PersonOmit = Omit<PersonType, 'profissao'>;
declare type PersonExcluded = Exclude<PersonType, 'idade'>;
declare type Pessoas = Record<string, PersonType>;
declare const pessoas: Pessoas;
//# sourceMappingURL=index.d.ts.map