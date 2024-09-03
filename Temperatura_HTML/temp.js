
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    
    const temperatura = frm.inTemp.value;
    const fahrenheit =  (temperatura * 1.8) + 32;
    resp.innerText = (`A temperatura de ${temperatura}°C é ${fahrenheit.toFixed(2)}°F`)
    e.preventDefault ();
})

