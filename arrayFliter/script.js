//Filter -> sempre vai retornar um array, com a mesma quantidade de elementos ou menos.

const numeros = [5, 50, 80, 1, 3, 2, 5, 8, 7, 11, 15, 22, 27]

// const numerosFiltrados = numeros.filter(valor => valor > 10); function completamente reduzida
const numerosFiltrados = numeros.filter((valor, indice, array) => {
    console.log(valor, indice, array);
    return valor > 10
});
console.log(numerosFiltrados);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Victor', idade: 47},
];

// const pessoasComNomeGrande = pessoas.filter(function(obj){
//     return obj.nome.length >= 6;
// });
// console.log(pessoasComNomeGrande);

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 6);
console.log(pessoasComNomeGrande);

const pessoasComMaisDe50 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComMaisDe50);

const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a')
})
console.log(nomeTerminaComA);