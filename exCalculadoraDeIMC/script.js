function CalcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultadoDiv = document.querySelector(".resultado");

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
      resultadoDiv.textContent = "Digite valores válidos!";
      return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc < 25) {
      classificacao = "Peso normal";
    } else if (imc < 30) {
      classificacao = "Sobrepeso";
    } else if (imc < 35) {
      classificacao = "Obesidade grau 1";
    } else if (imc < 40) {
      classificacao = "Obesidade grau 2";
    } else if (imc < 173){
      classificacao = "Obesidade grau 3";
    } else {
        classificacao = "Digite um peso verdadeiro"
    }

    resultadoDiv.innerHTML = `
      Seu IMC é <strong>${imc.toFixed(2)}</strong><br>
      Classificação: <strong>${classificacao}</strong>
    `;
  }
