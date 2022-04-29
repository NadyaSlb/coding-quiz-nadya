var buttonStart = document.querySelector("#start");
var timer = document.querySelector("#count");
var timeLeft = 0;
var countdown = function() {
    timeLeft = + 75;
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft >= 1) {
          timer.textContent = "Time: " + timeLeft;
          timeLeft--;
        } else {
          timer.textContent = "Time: 0";
          // Use `clearInterval()` to stop the timer
          clearInterval(timeInterval);
          // Call the `displayMessage()` function
        }
      }, 1000);
    }
buttonStart.addEventListener("click", countdown());