// Retornando a soma do dobro de todos pares

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros
    .filter(valor => valor % 2 === 0) // pegando os pares
    .map(valor => valor * 2) // dobrando os pares
    .reduce((ac, valor) => ac + valor); // somando o dobro dos pares

    console.log(numerosPares);