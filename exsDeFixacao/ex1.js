const name = prompt("Digite seu nome: ");
const age = Number(prompt("Digite sua idade: "));
const anoNascimento = Number(prompt("Digite seu ano de nascimento: "));

const textoNoHTML = document.getElementById("exibir");

console.log(`Olá, Meu nome é ${name}, tenho ${age} anos e nasci em ${anoNascimento}.`);

let ageIn2026 = Math.abs(2026 - anoNascimento);

console.log(`Em 2026 terei ${ageIn2026} anos`);

textoNoHTML.innerHTML += (`Olá, Meu nome é ${name}, tenho ${age} anos e nasci em ${anoNascimento}.<br>`)
textoNoHTML.innerHTML += (`<br>Em 2026 terei ${ageIn2026} anos`)

alert(`Confira no console as respostas `)