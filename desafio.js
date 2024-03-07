let resultado = VitoriaseDerrotas(76, 35)

function VitoriaseDerrotas(vitorias, derrotas){
        let mediaDesempenho =  vitorias - derrotas;
        return mediaDesempenho
}

console.log(resultado);

switch(true) {
    case resultado < 10:
    console.log("Ferro");
    break;
    case resultado >= 11 && resultado <= 20:
    console.log("bronze");
    break;
    case resultado >= 21 && resultado <= 50:
    console.log("prata");
    break;
    case resultado >= 51 && resultado <= 80:
    console.log("ouro");
    break;
    case resultado >= 81 && resultado <= 90:
    console.log("diamante");
    break;
    case resultado >= 91 && resultado <= 100:
    console.log("lendário");
    break;
    case resultado >= 101:
    console.log("imortal");
    break;
}