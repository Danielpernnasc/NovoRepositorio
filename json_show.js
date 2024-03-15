invoice = {
    name: "Daniel",
    address: "Padre Manuel Pedroso, 98 apto 51 bloco 3 Artur Alvim 03590-150 São Paulo SP",
    products: {
        0: ["mouse", 19.90],
        1: ["PC", 4000.00], 
        2: ["smartphone", 3500.00],
        3: ["console", 5000.00],
        4: ["teclado", 89.90],
        6: ["webcam", 99.90]
    },
    taxes: 98.90


    
}

generateInvoice(invoice)
function generateInvoice(invoice){
    console.log(`O comprador  ${invoice.name}`);
    console.log(`Residente no endereço ${invoice.address}`);
    console.log("-----");

    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`Comprou os produtos  - ${productName}: R$ ${productPrice}`)
    }


}

invoice = {
    name: "Daniel",
    address: "Padre Manuel Pedroso, 98 apto 51 bloco 3 Artur Alvim 03590-150 São Paulo SP",
    products: {
        0: { name: "mouse", price: 19.90 },
        1: { name: "PC", price: 4000.00 },
        2: { name: "smartphone", price: 3500.00 },
        3: { name: "console", price: 5000.00 },
        4: { name: "teclado", price: 89.90 },
        6: { name: "webcam", price: 99.90 }
    },

}


const totalValue  = Object.values(invoice.products).reduce((valorProdutos, valoresCorrentes) => valorProdutos + (valoresCorrentes.price - (valoresCorrentes.price * 0.1)), 0 );
console.log(invoice);
console.log("Total dos Produtos com Desconto de 10%:", totalValue.toFixed(2));