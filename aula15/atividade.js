const num = Number(prompt("Digite um numero: "));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto')

    numeroTitulo.innerHTML += num;

    texto.innerHTML += `<p>Raiz quadrada: <strong>${Math.sqrt(num)}<\strong><br><\p>`;
    texto.innerHTML += `<p>${num} é inteiro: <strong>${Number.isInteger(num)}<\strong><br><\p>`;
    texto.innerHTML += `<p>É NaN: <strong>${isNaN(num)}<\strong><br>`;
    texto.innerHTML += `<p>Arredondado para baixo: <strong>${Math.floor(num)}<\strong><br><\p>`;
    texto.innerHTML += `<p>Arredondado para cima: <strong>${Math.ceil(num)}<\strong><br><\p>`;
    texto.innerHTML += `<p>Com duas casas decimais: <strong>${num.toFixed(2)}<\strong><br><\p>`;