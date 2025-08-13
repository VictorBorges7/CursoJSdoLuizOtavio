// funcao construtora -> objetos;
// funcao fabrica -> objetos;
// construtora -> Pessoa (new) -> comeca com a primeira letra maiuscula e utiliza a palavra new;

function Pessoa(nome, sobrenome){
    // atributos ou metodos privados
    const ID = 123456;
    const metodoInterno = function(){};

    // Atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um metodo');
    };
}

const p1 = new Pessoa('Victor', 'Borges')
const p2 = new Pessoa('Rayssa', 'Cristina')

p1.metodo();
p2.metodo();