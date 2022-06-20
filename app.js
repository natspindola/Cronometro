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
        ms++

        if(ms == 100){
            seg++
            ms = 0
        }
       
        if(seg == 60){
            min++
            seg = 0
        }

        if(min == 60){
            hr++
            min = 0
        }

        atualizaValor()
    }, 10);
}

function atualizaValor()
{
    mili.innerHTML = ms
    segundos.innerHTML = seg
    minutos.innerHTML = min
    horas.innerHTML = hr
}

btnStart.addEventListener("click", start)