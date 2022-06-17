let btnStart = document.getElementById("start")

let mili = document.getElementById("mili")
let segundos = document.getElementById("segundos")
let minutos = document.getElementById("minutos")
let horas = document.getElementById("horas")

let startTimer
let ms = "00"
let seg = "00"
let min = "00"
let hr = "00"

function start()
{
    startTimer = setInterval(function () {
        ms = ms + 1
        console.log("ms")
    }, 10);
}

btnStart.addEventListener("click", start)