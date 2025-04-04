let heroi = {
    nome:  "Guilherme",
    idade: 19,
    tipo: "ninja",

    atacar(){
        switch(heroi.tipo){
            case "mago":
                console.log("o " + heroi.nome + " atacou usando magia")
                break
            
            case "guerreiro":
                console.log("o " + heroi.nome + " atacou usando espada")
                break

            case "monge":
                console.log("o " + heroi.nome + " atacou usando artes marciais")
                break

            case "ninja":
                console.log("o " + heroi.nome + " atacou usando shuriken")
                break

            default:
                console.log("o " + heroi.nome + " ainda nao tem tipo")
                break
        }
    } 
}

heroi.atacar()