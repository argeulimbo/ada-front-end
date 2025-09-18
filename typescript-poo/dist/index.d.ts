interface IPessoa {
    nome: string;
    idade: number;
    altura: number;
    dormir: () => void;
}
declare class Pessoa implements IPessoa {
    nome: string;
    idade: number;
    altura: number;
    private _cpf;
    constructor(nome: string, idade: number, altura: number, cpf: string);
    get cpf(): string;
    set cpf(newCpf: string);
    dormir(): void;
}
declare const pessoa1: Pessoa;
declare const pessoa2: Pessoa;
//# sourceMappingURL=index.d.ts.map