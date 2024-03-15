
// let num1 = parseInt(gets());
// let num2 = parseInt(gets());


// const xpGanho = ;


// print("Voce ganhou " + xpGanho + " XP!");

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



    rl.question('Digite o valor do desafio do Monstro: ', (Monstro) => {
       
        obterValor(Monstro);
    })


function obterValor(Monstro){
    rl.question('Digite um valor entre 0 e 100: ', (Desafio) =>{
        Desafio = parseFloat(Desafio);
     
     
        const valor = parseInt(Desafio);
        if(isNaN(valor) || valor < 0 || valor > 100){
            console.log('Valor inválido. Por favor, digite um número entre 0 e 100.');
            obterValor(Monstro);
        }else {
            console.log('Valor válido:', valor);
            const xpGanho = Monstro * Desafio * 100;
            console.log("Valor do XP recebido é: ", xpGanho);
            rl.close();
        }
    })
}



