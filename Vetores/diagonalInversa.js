const prompt = require ("prompt-sync")()

    let diagonalInvertida = [];

   
    for (let i = 0; i < 3; i++) {
        diagonalInvertida[i] = []; 
        for (let j = 0; j < 3; j++) {
            
            if (j === 2 - i) {
                diagonalInvertida[i][j] = 1; 
            } else {
                diagonalInvertida[i][j] = 0; 
            }
        }
    }

   
console.log(diagonalInvertida);
console.table(diagonalInvertida);
