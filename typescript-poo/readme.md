# Programação Orientada a Objetos

### Principais Características
1. Reutilização de código;     -> DRY - Dont Repeat Yourself
2. Modularização;
3. Integração simples entre módulos;
4. Reaproveitamento de módulos em outros sistemas;

### Elementos presentes na POO:
* Classes - abstração de elemento do mundo real
     Ex.:  Pessoa, Smartphone, Cachorro

* Objetos - representação concreta da abstração feita através da classe
     Ex.: Walisson, Galaxy Z Fold4, Beethoven

* Atributos - características comuns apresentadas pelos objetos de uma classe
     Ex.: Nome, idade e altura (Pessoa), memória, processador, câmera (Smartphone), raça (Cachorro)

* Métodos - Ações comuns realizadas pelos objetos de uma classe
     Ex.: Comer, dormir, levantar (Pessoa), ligar, instalar app, tirar foto(Smartphone), latir (Cachorro)


## Princípios essenciais na modelagem do paradigma de POO:
1. Encapsulamento
   Cada classe deve conter todas as informações necessárias para seu funcionamento, bem como todos os métodos necessários para alterar essas informações.
   Ex: 
    - private
    - readonly

1.1. Accessors: getters e setters
    Ex:
        - get cpf() {
            return this.cpf;
        }
        - set cpf(newCpf: string) {
            this.cpf = newCpf;
        }

2. Herança
    A classe extends outra classe, onde herda seus atributos e métodos
    - É permitido que herde e adicione novos atributos e/ou métodos
    - Exemplo: Class Animal, Class Cachorro extends Animal

3. Polimorfismo
    class Professor herda características da class mãe Pessoa, logo, todo Professor é uma Pessoa, mas nem toda Pessoa é Professor.
    EM resumo, todo objeto que herda a classe mãe, é a classe mãe, mas não ao inverso.