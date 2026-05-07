let botones = document.getElementsByClassName("numeros")
let resultado = document.getElementById("resultado")
let prm
let operacion

for (const key in botones) {
    if (Object.prototype.hasOwnProperty.call(botones, key)) {
        const boton = botones[key];
        // console.log(boton)
        boton.addEventListener("click", pintar)
    }
}

function pintar(e) {
    // console.log(e.target.className)
    resultado.value += e.target.innerText
}

let operadores = document.getElementsByClassName("operadores")
console.log(operadores)

for (const key in operadores) {
    if (Object.prototype.hasOwnProperty.call(operadores, key)) {
        const boton = operadores[key];
        console.log(boton)
        if (boton.innerText == "Ce")
            boton.addEventListener("click", borrar)
        if (boton.innerText == "+")
            boton.addEventListener("click", sumar)
        if (boton.innerText == "=")
            boton.addEventListener("click", igual)
        boton.addEventListener("click", pintar2)
    }
}

function pintar2(e) {
    console.log(e.target.innerText)
}

function borrar() {
    resultado.value = ""
}

function sumar(e) {
    prm = resultado.value
    operacion = e.target.innerText
    resultado.value = ""
    e.target.style.backgroundColor = "red"
}

function igual() {
    let prm2 = resultado.value
    if (operacion == "+") {
        resultado.value = parseInt(prm) + parseInt(prm2)
    }

}