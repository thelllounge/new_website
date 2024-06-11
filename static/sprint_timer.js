//Grabbing things by ID from the HTML
let sprintSelect = document.getElementById("select");
let restSelect = document.getElementById("rest");
let startButton = document.getElementById("startButton");
let resetButton = document.getElementById("resetButton");
let accessibleCheck = document.getElementById("accessibleFlashing");
let timerDiv = document.getElementById("timer");

// let timerDisplay = getElementById("timeDisplay").innerHTML;

let beep = new Audio("BeepShort.wav");
let restAlert = new Audio("Rest Alert.wav");
let sprintAlert = new Audio("SprintAlert.wav");

//Adding functions to actions
sprintSelect.addEventListener("change", saveTime);
restSelect.addEventListener("change", saveTime);

startButton.addEventListener("click", startPauseTimer);
resetButton.addEventListener("click", resetEverything);

//Needed variables to make the functions work
let sprintTime = 0;
let restTime = 0;

let timerCountdown;
let sprinting = false;


//This makes sure that both a sprint time and a rest time are selected, and if not reminds people to select what's missing.
//Once both are selected it displays the sprint time on the screen.
function saveTime(){

    if(sprintSelect.value == "Select a sprint time" && document.getElementById("rest").value == "Select a rest time"){
        document.getElementById("timeDisplay").innerHTML = "<p>Please select a sprint and rest time.</p>"
    }else if(sprintSelect.value == "Select a sprint time"){
        document.getElementById("timeDisplay").innerHTML = "<p>Please select a sprint time.</p>"
    }else if(document.getElementById("rest").value == "Select a rest time"){
        document.getElementById("timeDisplay").innerHTML = "<p>Please select a rest time.</p>"
    }else{
        let sprintMinutes = sprintSelect.value.padStart(2, "0");
        document.getElementById("timeDisplay").innerHTML = `<p>00:${sprintMinutes}:00</p>`;
        sprintTime = Number(sprintSelect.value * 60);
        restTime = Number(restSelect.value * 60);
    }
}

function startPauseTimer(){
    if(sprintSelect.value == "Select a sprint time" || document.getElementById("rest").value == "Select a rest time"){
        document.getElementById("timeDisplay").innerHTML = "<p>Please select both a sprint and rest time.</p>"
    }else{
        if(!timerCountdown){
            timerCountdown = setInterval(countDownSprint, 1000);
            //for some reason pausing while in a rest always turns sprinting to true. This is a problem. Must solve
            if(startButton.innerHTML == "Let's Start!"){
                sprinting = true;
            }
            startButton.innerHTML = "Pause";
        }else{
            clearInterval(timerCountdown);
            timerCountdown = null;
            startButton.innerHTML = "Start";
        }
    }

    if(startButton.innerHTML != "Start"){
        if(sprinting == true){
            sprintAlert.play();
        }else{
            restAlert.play();
        }
    }
}

function resetEverything(){
    clearInterval(timerCountdown);
    timerCountdown = null;
    startButton.innerHTML = "Start";
    sprintSelect.value = "Select a sprint time"
    restSelect.value = "Select a rest time"
    sprintTime = 0;
    restTime = 0;
    document.getElementById("timeDisplay").innerHTML = "<p>Please select a sprint and a rest time.</p>"
    document.getElementById("sprintingOrResting").innerHTML = '';
    document.getElementById("")
}

function beepWarning(){
    if(document.getElementById("timeDisplay").innerHTML == "<p>00:00:03</p>" || document.getElementById("timeDisplay").innerHTML == "<p>00:00:02</p>" || document.getElementById("timeDisplay").innerHTML == "<p>00:00:01</p>"){
        beep.play();
    }else if(document.getElementById("timeDisplay").innerHTML == "<p>00:00:00</p>" && sprinting){
        restAlert.play();
    }else if(document.getElementById("timeDisplay").innerHTML == "<p>00:00:00</p>" && !sprinting){
        sprintAlert.play();
    }
}

function flashWarning(){
    if(accessibleCheck.checked == true){
        if(document.getElementById("timeDisplay").innerHTML == "<p>00:00:03</p>"){
            timerDiv.classList.add("three");
        }else if(document.getElementById("timeDisplay").innerHTML == "<p>00:00:02</p>"){
            timerDiv.classList.remove("three");
            timerDiv.classList.add("two");
        }else if(document.getElementById("timeDisplay").innerHTML == "<p>00:00:01</p>"){
            timerDiv.classList.remove("two");
            timerDiv.classList.add("one");
        }else if(document.getElementById("timeDisplay").innerHTML == "<p>00:00:00</p>"){
            timerDiv.classList.remove("one");
        }
    }
}

function countDownSprint(){
    if(sprinting == true){
        sprintTime--
        document.getElementById("timeDisplay").innerHTML = `<p>00:${String(Math.floor(sprintTime / 60)).padStart(2, "0")}:${String(sprintTime % 60).padStart(2,"0")}</p>`;
        document.getElementById("sprintingOrResting").innerHTML = `<p>Sprinting</p>`;
    }else{
        restTime--
        document.getElementById("timeDisplay").innerHTML = `<p>00:${String(Math.floor(restTime / 60)).padStart(2, "0")}:${String(restTime % 60).padStart(2,"0")}</p>`;
        document.getElementById("sprintingOrResting").innerHTML = `<p>Resting</p>`;
    }

    beepWarning();

    if(restTime == -1 && sprinting == false){
        sprinting = true;
        sprintTime = Number(sprintSelect.value * 60);
        document.getElementById("timeDisplay").innerHTML = `<p>00:${String(Math.floor(sprintTime / 60)).padStart(2, "0")}:${String(sprintTime % 60).padStart(2,"0")}</p>`;
        document.getElementById("sprintingOrResting").innerHTML = `<p>Sprinting</p>`;
    }else if(sprintTime == -1 && sprinting == true){
        sprinting = false;
        restTime = Number(restSelect.value * 60);
        document.getElementById("timeDisplay").innerHTML = `<p>00:${String(Math.floor(restTime / 60)).padStart(2, "0")}:${String(restTime % 60).padStart(2,"0")}</p>`;
        document.getElementById("sprintingOrResting").innerHTML = `<p>Resting</p>`;
    }

    flashWarning();
}
