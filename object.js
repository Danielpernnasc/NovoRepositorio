class formadeBolo{
    constructor(saborDaMassa, saborRecheio) {
        this.saborDaMassa = saborDaMassa;
        this.saborRecheio = saborRecheio;

    }


    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }

    assar(){
        let assar = 180 ;
        let tempoassar = 20;
        let dourar = 90;
        let tempodourar = 10;

        return console.log(assar + dourar * (tempoassar + tempodourar), 'em quanto graus');
      
    }
    

}
let boloFesta = new formadeBolo("chocolate", "nutella");

boloFesta.escrever();
boloFesta.assar();