class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log('oieeee');
    }

    escutar(){
        console.log('estou na escuta');
    }
}

p1 = new Pessoa('Victor', 'Borges')

p1.falar();