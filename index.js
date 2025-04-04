let heroi = {
    nome:  "Guilherme",
    idade: 19,
    tipo: "ninja",

    atacar(){
        switch(heroi.tipo){
            case "mago":
                console.log("o " + heroi.nome + " atacou usando magia")
            
            case "guerreiro":
                console.log("o " + heroi.nome + " atacou usando espada")

            case "monge":
                console.log("o " + heroi.nome + " atacou usando artes marciais")

            case "ninja":
                console.log("o " + heroi.nome + " atacou usando shuriken")
        }
    } 
}