let btnStart = document.getElementById("start")

let mili = document.getElementById("mili")
let segundos = document.getElementById("segundos")
let minutos = document.getElementById("minutos")
let horas = document.getElementById("horas")

let startTimer
let ms = 0
let seg = 0
let min = 0
let hr = 0

function start()
{
    startTimer = setInterval(function () {
        ms = ms + 1
        console.log("ms")
        atualizaValor()
    }, 10);
}

function atualizaValor()
{
    mili.innerHTML = ms
}

btnStart.addEventListener("click", start)