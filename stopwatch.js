let milliseconds = 0
let seconds = 0
let minutes = 0
 
let startButton = document.getElementById('startbutton')


let digits = document.getElementById('digits')
let lapList = document.getElementById('Lap')

let interval;
function start() {
    startButton.disabled = true
    

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
    startButton.disabled = false
    clearInterval(interval)
}
function reset() {
    stop()
    milliseconds = 0
    seconds = 0
    minutes = 0
    digits.innerHTML = "00:00:00"
}

function Lap() {
    let newListItem = document.createElement('li')
    newListItem.textContent = ""
    lapList.appendChild(newListItem)
}