function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    return this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual){ // utilizamos prototypes para nao repetir uma funcao toda vez que um objeto novo for criado
    return this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto("Garrafa", 100);

console.log(p1.aumento(10));
console.log(p1.desconto(10));