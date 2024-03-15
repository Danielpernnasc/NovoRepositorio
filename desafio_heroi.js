const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o valor de entrada: ', (posicaoInicial) => {
    rl.question('Digite o valor do numero de passos: ', (totalPasso) => {
    
    
        posicaoInicial = parseFloat(posicaoInicial);
        totalPasso = parseFloat(totalPasso);
        
        const resultadoPasso = quantoPassosAndou(posicaoInicial, totalPasso)
        console.log("Posicao final do heroi:", resultadoPasso);

        rl.close();
    })
})






function quantoPassosAndou(posicaoInicial, totalPasso) {
    const posicaoFinal = posicaoInicial + totalPasso;
    return posicaoFinal;
}

// const posicaoInicial = parseInt(gets());
// const totalPassos = parseInt(gets());

// const posicaoFinal = andarNumeroPasso(posicaoInicial, totalPassos);
// print("Posicao final do heroi:", posicaoFinal);
// function andarNumeroPasso(posicaoInicial, totalPasso){
//     let resultado = posicaoInicial + totalPasso;
//     return resultado;

// }
