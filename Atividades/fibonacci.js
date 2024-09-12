const prompt = require("prompt-sync")();

function fibonacci(n) {
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

const termo = fibonacci(10);
console.log(termo);
