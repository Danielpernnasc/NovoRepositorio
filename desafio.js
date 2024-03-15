// const valorSalario = parseFloat(gets());
// const valorBeneficio = parseFloat(gets());


// const valorImposto = calcularImpostos(valorSalario);

// const saida = valorSalario - valorImposto + valorBeneficio;
// print(saida.toFixed(2));

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o valor do salário: ', (valorSalario) => {
    rl.question('Digite o valor do benefício: ', (valorBeneficio) => {
        valorSalario = parseFloat(valorSalario);
        valorBeneficio = parseFloat(valorBeneficio);

        const valorImposto = calcularImposto(valorSalario);
        
        const saida = valorSalario - valorImposto + valorBeneficio;
        console.log(saida.toFixed(2));

        rl.close();
    });
});


function calcularImposto(salario){
    let aliquota;
    if (salario >= 0 && salario <= 1100){
        aliquota = 0.05;
    }else if (salario >= 1100.01 && salario <= 2500.00){
        aliquota = 0.10;
    }else {
        aliquota = 0.15;
    }
    return aliquota * salario;
}