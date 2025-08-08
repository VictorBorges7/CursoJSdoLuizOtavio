function getDiaSemanaTexto(diaSemana){
    const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado']
    return diasSemana[diaSemana]
}

function getNomeMesTexto(mes){
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return meses[mes];
}

const container = document.querySelector('.container');

const data = new Date();
const diaSemana = data.getDay();
const mes = data.getMonth();
const diaDoMes = data.getDate();
const ano = data.getFullYear();

const hora = data.getHours();
const minutos = data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes();

container.innerHTML = `
    <h1>${getDiaSemanaTexto(diaSemana)}, ${diaDoMes} de ${getNomeMesTexto(mes)} de ${ano} <br>${hora}:${minutos}</h1>
`;

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});

// esse ex aprendi a resolver de tres formas diferentes, na primeira delas usei o switch pra separar cada nome de dia da semana e cada nome de mes, a segunda resolucao e utilizando servios do propio js no caso e a terceira eu troquei todos switchs case para um array que deu o mesmo resultado de maneira muito mais simples