const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num1 = Number(document.getElementById('inNum').value);
    const num2 = Number(document.getElementById('inNum2').value);
    const opd = document.getElementById('opd').value;
    let resultado;

    switch (opd) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultado = 'Erro: Divisão por zero';
            }
            else {
                resultado = num1 / num2;
            }
            break;
        default:
            resultado = 'Operação Inválida';
    }
    document.getElementById('resultado').innerText = 'Resultado: ' + resultado.toFixed();

})

