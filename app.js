var min = 0;
var sec = 0;
var msec = 0;
var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecheading = document.getElementById("msec");
var startbtn = document.getElementById("startbtn");
var pausebtn = document.getElementById("pausebtn");
var restartbtn = document.getElementById("restartbtn");
var interval = setInterval(timer, 10);
var clearinterval = clearInterval(interval);
function timer(){
    msec++;
    msecheading.innerHTML = msec;
 if( msec >= 100 ){
     msec = 0;
     sec++;
     secheading.innerHTML = sec;
 }
else if(sec >= 60){
    sec = 0
    min++;
    minheading.innerHTML = min;
} 
}

function start(){
    interval = setInterval(timer, 10);
    startbtn.disabled = true;
    pausebtn.disabled = false;
    restartbtn.disabled = false;
}

function pause(){
clearinterval = clearInterval(interval);
 pausebtn.disabled = true;
 startbtn.disabled = false;
 restartbtn.disabled = false;
}

function restart(){
    min = 0;
    sec = 0;
    msec = 0;
minheading.innerHTML = min;
secheading.innerHTML = sec;
msecheading.innerHTML = msec; 
pause()
restartbtn.disabled = true;
}
