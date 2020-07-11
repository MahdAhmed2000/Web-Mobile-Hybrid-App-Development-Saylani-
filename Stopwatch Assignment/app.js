var msec = 0;
var sec = 0;
var min = 0;
var hr = 0;
var interval;
function add(){
  document.getElementById("S").disabled = true;
  msec++
  document.getElementById("4").innerHTML = msec;
  if (msec >= 100){
    msec = 0;
    document.getElementById("4").innerHTML = msec;
    sec++
    document.getElementById("3").innerHTML = sec;
    if (sec >= 60){
      sec = 0;
      document.getElementById("3").innerHTML = sec;
      min++;
      document.getElementById("2").innerHTML = min;
      if (min >= 60){
        min = 0;
        document.getElementById("2").innerHTML = min;
        hr++;
        document.getElementById("1").innerHTML = hr;
      }
    }
  }
}
function start(){
  interval = setInterval(add, 10);
}
function stop(){
  clearInterval(interval);
  document.getElementById("S").disabled = false;
}
function reset(){
  msec = 0;
  sec = 0;
  min = 0;
  hr = 0;
  document.getElementById("4").innerHTML = msec;
  document.getElementById("3").innerHTML = sec;
  document.getElementById("2").innerHTML = min;
  document.getElementById("1").innerHTML = hr;
  stop();
  document.getElementById("S").disabled = false;
}