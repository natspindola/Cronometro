let btnStart = document.getElementById("start")

let mili = document.getElementById("mili")
let segundos = document.getElementById("segundos")
let minutos = document.getElementById("minutos")
let horas = document.getElementById("horas")

let startTimer
let ms = 0
let seg = "00"
let min = "00"
let hr = "00"

function start()
{
    startTimer = setInterval(function () {
        ms++

        if(ms == 100){
            seg++

            if(seg < 10){
                seg = "0" + seg
            }

            ms = 0
        }
       
        if(seg == 60){
            min++

            if(min < 10){
                min = "0" + min
            }

            seg = 0
        }

        if(min == 60){
            hr++

            if(hr < 10){
                hr = "0" + hr
            }

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
