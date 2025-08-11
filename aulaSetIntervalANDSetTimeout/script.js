function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {hour12: false})
}

const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer) // para o intervalo
}, 3000);

setTimeout(function(){
    console.log('Fim da execucao do timer');
}, 5000);

