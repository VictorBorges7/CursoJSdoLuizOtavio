function ePaisagem(altura, largura){
    return altura >= largura;
}

const ePaisagem2 = (altura, largura) => altura > largura;

console.log(ePaisagem(10805, 1920));
console.log(ePaisagem2(1080, 1920));