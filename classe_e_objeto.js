class Hero {
    constructor(nome,idade,tipo) {
        this.name = nome
        this.age = idade
        this.type = tipo
    }

    attack() {
        if (this.type=="mago") {
            console.log(`O ${this.type} atacou usando magia`)}
        else if (this.type=="guerreiro") {
            console.log(`O ${this.type} atacou usando espada`)
        }
        else if (this.type=="monge") {
            console.log(`O ${this.type} atacou usando artes marciais`)
        }
        else if (this.type=="ninja") {
            console.log(`O ${this.type} atacou usando shuriken`)
        }
    }

}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Insira o nome do seu herói: ",(nomeHeroi)=> {
    rl.question("Insira a idade do seu herói: ",(idadeHeroi)=>{
        rl.question("Insira o tipo do seu herói: ",(tipoHeroi)=> {
            let meuHeroi = new Hero(nomeHeroi,idadeHeroi,tipoHeroi)

            meuHeroi.attack()
            rl.close()
        })
    })
})

