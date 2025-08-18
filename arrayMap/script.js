// dobrando numero usando a funcao map

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosEmDobro = numeros.map(valor => valor * 2);

// console.log(numerosEmDobro);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const nomesPessoas = pessoas.map(obj => obj.nome);
console.log(nomesPessoas);

const idadesPessoas = pessoas.map(obj => ({idade: obj.idade})); // envolver o return com paranteses, se nao fizer isso os parenteses do return viram os parametros
console.log(idadesPessoas);

const idPessoas = pessoas.map((obj, indice) => {
    const newObj = { ...obj}; // spread operator, isso serve pois o array e utilizado por referencia
    newObj.id = indice;       // ou seja, tudo que eu fizer no novo array vai ser refletido no outro
    return newObj;            // entao utilizamos isso para evitar com que isso acontece, criando um novo array
});
console.log(idPessoas);