// let nomesPokemon = ["pikachu", "chamander", "bulbasaur"];
// let timePokemon = [
//     ["Pikachu", "M", 1],
//     ["Chamander", "F", 3]
// ];
// console.log(" O pokemon " + timePokemon[1][0] + " é do sexo " + timePokemon[1][1] + " está em qual nível " + timePokemon[1][2]);
// console.log(nomesPokemon.length);
// let digimon = ["agumon", "gabumon", "piyomon"];
// console.log(digimon);

// let tempo = "chuva"
// let resultado = tempo === "chuva"
// console.log(!!resultado)

// let tempo = "chuva"
// let horario = 8
// let resultado = !((tempo !== "chuva") && (horario > 6))
// console.log(resultado)

// let ehligado = false;

// if(1 === 1){
//     console.log("executou o comando");
// }

// let possuiOvos = true;
// let itensComprados = "";

// if(possuiOvos){
//     itensComprados = "leite";
// }

// console.log("item comprado: " + itensComprados);

// let fruta = "Melancia";

// switch(fruta) {
//     case "laranja":
//     console.log("suco de laranja")
//     case "abacaxo":
//     console.log("suco de abacaxi")
//     case "banana":
    
//     console.log("vitamina de banana")
//     break
//     case "maçã":
//     console.log("suco de maçã")
//     case "limão":
//     console.log("limonada")
//     default:
//     console.log("undefined drink")
// }


// for (let i = 0 ; i < 4; i++){
//     console.log(i);
//     console.log("aumentador o contador");
// }
// let pontosDeVida = 0;
// for (let i = 0; i < 11; i++) {
//     pontosDeVida += 1;
//     console.log("Tomou poção mágica " +  i)
// }

// console.log(pontosDeVida + " Totais");


// let contador = 0

//  while (contador < 3){
//     console.log("olá");
//  }


// do {
//     console.log("ola");
//     contador++
// } while (contador < 3);


torrar("Pão de Forma", "Daniel");
// torrar("Daniel ", "Pão de Forma Integral");

function torrar(pao, nome = "Cliente"){
    console.log("torrada feita com " + pao);
    console.log("Pedido de " + nome);
    // //let nome = "Daniel" 
    // console.log(nome + "tem torradas feita com " + pao);
    //console.log(nome);
}

// let resultado = soma(5, 5)

// function soma(numA, numB){
//     let somatorio = numA + numB;
//     return somatorio
// }

// console.log("O Resultado dessa função é " + resultado)


// let userName = getFirstName("Daniel Péricles do Nascimento");

// function getFirstName(name){
//     let firstName = name.split(" ")[0]
//     return firstName
// }

// console.log("Seja bem vindo " + userName);