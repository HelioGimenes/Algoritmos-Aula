const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit" , (e) => {
    e.preventDefault()

    const nota1 = Number (document.getElementById('inNota1').value);
    const nota2 = Number (document.getElementById('inNota2').value);
    const nota3 = Number (document.getElementById('inNota3').value);
    const resultado =  (nota1 + nota2 + nota3) 
    let media = resultado / 3
    if (media >= 7) {
        resp.innerText  = (`Está Aprovado! Sua nota é: ${media.toFixed(2)}`);
    }
    else if (media >=4 && media <7) {
        resp.innerText = (`Está em recuperação! Sua nota é: ${media.toFixed(2)}`)
    }
    else  {
        resp.innerText = (`Está reprovado! Sua nota é: ${media.toFixed(2)}`)
         }

       // resp.innerText  = (`o aluno está: ${media.toFixed(2)}`)
         //   console.log(media.toFixed(1))











})