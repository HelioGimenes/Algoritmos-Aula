const prompt = require ("prompt-sync")();

let contador = 1
while (contador <= 30){
    if (contador % 4 === 0) {
        contador ++;
        continue;
      }
      console.log(contador)
      contador++
    }