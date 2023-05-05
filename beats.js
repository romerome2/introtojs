let myform = document.getElementById("myform")
let synth = new Tone.Synth().toDestination()

function onSubmit (e) {
    e.preventDefault()
    synth.triggerAttack(myform.elements["yourname"].value)
    let duration = parseFloat(myform.elements["duration"].value)
    synth.triggerRelease(Tone.now() + duration)
    
}

myform.addEventListener("submit", onSubmit) 