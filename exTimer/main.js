const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
const estilosBody = getComputedStyle(document.body);

let timer;
let segundos = 0;
const corOriginal = relogio.style.color;

iniciar.addEventListener('click', function(event){
    clearInterval(timer)
    relogio.style.color = corOriginal;
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = cronometro();
    }, 1000);
})

pausar.addEventListener('click', function(event){
    clearInterval(timer)
    relogio.style.color = '#ff0000ff'
})

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.style.color = corOriginal;
    segundos = 0;
    relogio.innerHTML = '00:00:00';
})

function cronometro(){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'UTC'})
}



