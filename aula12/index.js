let varA =  'A';
let varB =  'B';
let varC =  'C';

let aux = varA;

varA = varB;
varB = varC;
varC = aux;

console.log(varA);
console.log(varB);
console.log(varC);