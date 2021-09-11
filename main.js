window.onload = function (){
  var hrs = 00;
  var mins = 00;
  var secs = 00;
  var dys = 00;

  var hr = document.getElementById("hrs");
  var mn = document.getElementById("mins");
  var sc = document.getElementById("secs");
  var dy = document.getElementById("dys");

  var strt = document.getElementById("start");
  var stp = document.getElementById("stop");
  var rst = document.getElementById("reset");

  var interval;

  strt.onclick = function(){
    clearInterval(interval);
    interval = setInterval(startTime, 10)
  }
  stp.onclick = function(){
    clearInterval(interval);
  }
  rst.onclick = function(){
    clearInterval(interval);
    secs = "00";
    mins = "00";
    hrs = "00";
    hr.innerHTML = hrs;
    mn.innerHTML =mins;
    sc.innerHTML = secs;
  }
  function startTime (){
    secs++;

    if (secs <= 9){
      sc.innerHTML = "0" + secs;
    }
    if (secs > 9){
      sc.innerHTML = secs;
    }
    if (secs > 99){
      mins++;
      mn.innerHTML = "0" + mins;
      secs = 0;
      sc.innerHTML = "0" + 0;
    }
    if (mins > 9){
      mn.innerHTML = mins;
    }
    
    if (mins > 59){
      hrs++;
      hr.innerHTML = "0" + hrs;
      mins = 0;
      mn.innerHTML = "0" + 0;
    }
    if (hrs > 9){
      hr.innerHTML = hrs;
    }
    if (hrs > 59){
      dys++;
      dy.innerHTML = "0" + dys;
      dys = 0;
      dy.innerHTML = "0" + 0;
    }
    if (hrs > 9){
      dy.innerHTML = dys;
    }
  }

}
startTime();