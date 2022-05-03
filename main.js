// window.onload = function () {
  
//     var seconds = 00; 
//     var tens = 00; 
//     var appendTens = document.getElementById("tens")
//     var appendSeconds = document.getElementById("seconds")
//     var buttonStart = document.getElementById('button-start');
//     var buttonStop = document.getElementById('button-stop');
//     var buttonReset = document.getElementById('button-reset');
//     var Interval ;
  
//     buttonStart.onclick = function() {
      
//       clearInterval(Interval);
//        Interval = setInterval(startTimer, 10);
//     }
    
//       buttonStop.onclick = function() {
//          clearInterval(Interval);
//     }
    
  
//     buttonReset.onclick = function() {
//        clearInterval(Interval);
//       tens = "00";
//         seconds = "00";
//       appendTens.innerHTML = tens;
//         appendSeconds.innerHTML = seconds;
//     }
    
     
    
//     function startTimer () {
//       tens++; 
      
//       if(tens <= 9){
//         appendTens.innerHTML = "0" + tens;
//       }
      
//       if (tens > 9){
//         appendTens.innerHTML = tens;
        
//       } 
      
//       if (tens > 99) {
//         console.log("seconds");
//         seconds++;
//         appendSeconds.innerHTML = "0" + seconds;
//         tens = 0;
//         appendTens.innerHTML = "0" + 0;
//       }
      
//       if (seconds > 9){
//         appendSeconds.innerHTML = seconds;
//       }
    
//     }
    
  
//   }

window.onload = () => {


    let second = 0;
    let ms = 0;
    const appendSecond = document.getElementById('seconds');
    const appendMs = document.getElementById('ms');
    const startBtn = document.querySelector('.start');
    const stopBtn = document.querySelector('.stop');
    const resetBtn = document.querySelector('.reset');
    let Interval;

    startBtn.onclick = () => {
        
        Interval = setInterval(setTimer, 10);
    }

    stopBtn.onclick = () => {
        clearInterval(Interval);
    }

    resetBtn.onclick = () => {
        clearInterval(Interval);
        second = 0;
        ms = 0;
        appendMs.innerHTML = "00";
        appendSecond.innerHTML = "00";

    }


    function setTimer(){
        ms ++;

        if(ms < 10) appendMs.innerHTML = "0" + ms;
        if(ms >= 10) appendMs.innerHTML = ms;
        if(ms == 100) {
            second ++;
            ms = 0;
            (second < 10) ? appendSecond.innerHTML = "0" + second :
            appendSecond.innerHTML = second;
            appendMs.innerHTML = "00";
        }
    }
}

