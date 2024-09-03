const prompt = require("prompt-sync")()
let senha = prompt("Coloque sua senha aqui: ")


let comprimentoMinimo = 8;
let temLetraMaiuscula = /[A-Z]/.test(senha);
let temLetraMinuscula = /[a-z]/.test(senha);
let temNumero = /[0-9]/.test(senha);
let temCaractereEspecial = /[@#$%&*]/.test(senha); 

if (senha.length < comprimentoMinimo) {
    console.log("A senha é muito curta. Deve ter pelo menos 8 caracteres.");
} else if (!temLetraMaiuscula) {
    console.log("A senha deve conter pelo menos uma letra maiúscula.");
} else if (!temLetraMinuscula) {
    console.log("A senha deve conter pelo menos uma letra minúscula.");
} else if (!temNumero) {
    console.log("A senha deve conter pelo menos um número.");
} else if (!temCaractereEspecial) {
    console.log("A senha deve conter pelo menos um caractere especial (@, #, $, %, etc.).");
} else {
    console.log("A senha é forte.");
}