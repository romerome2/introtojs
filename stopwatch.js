let milliseconds = 0
let seconds = 0
let minutes = 0
 
let startButton = document.getElementById('startbutton')
let lapButton = document.getElementById("lbut")

let digits = document.getElementById('digits')
let lapList = document.getElementById('Lap')

lapButton.disabled = true


let interval;
function start() {
    startButton.disabled = true
    lapButton.disabled = false


interval = setInterval(function () {
   milliseconds = milliseconds + 10
    
    if (milliseconds >= 1000) {
    seconds = seconds + 1
    milliseconds = 0
    }
    if (seconds >= 60) {
        minutes = minutes + 1
        seconds = 0
    }
    digits.innerHTML = minutes +":" +String (seconds).padStart(2,'0') + ":" + milliseconds/10
}, 10)
   
}
function stop() {

    lapButton.disabled = true
    startButton.disabled = false
    clearInterval(interval)
}
function reset() {
    lapButton.disabled = true

    stop()
    milliseconds = 0
    seconds = 0
    minutes = 0
    digits.innerHTML = "00:00:00"
    lapList.innerHTML = ""

}
function Lap() {
    let newListItem = document.createElement('li')
    newListItem.textContent = minutes +":" +String (seconds).padStart(2,'0') + ":" + milliseconds/10
    lapList.appendChild(newListItem)
}