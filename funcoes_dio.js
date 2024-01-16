function resultCalculator(victories_Local, loss_Local) {
    let result = victories_Local - loss_Local;
    let nivel; 

    if (result <= 10) {
        nivel = "Ferro";
    } else if (result >= 11 && result <= 20) {
        nivel = "Bronze";
    } else if (result >= 21 && result <= 50) {
        nivel = "Prata";
    } else if (result >= 51 && result <= 80) {
        nivel = "Ouro";
    } else if (result >= 81 && result <= 90) {
        nivel = "Diamante";
    } else if (result >= 91 && result <= 100) {
        nivel = "Lendário";
    } else if (result > 100) {
        nivel = "Imortal";
    }

    let message = `O Herói tem saldo de ${result} e está no nível de ${nivel}`;
    return message;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o número de vitórias: ', (victories) => {
  rl.question('Digite o número de derrotas: ', (loss) => {
    let resultado = resultCalculator(parseInt(victories), parseInt(loss));
    console.log(resultado);
    rl.close();
  });
});

