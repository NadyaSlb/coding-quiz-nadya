var buttonStart = document.querySelector("#start");
var body = document.querySelector("#body");
var timer = document.querySelector("#count");
var startingPage = document.querySelector("#startingDiv");
var formQuestion = document.querySelector("#main");
var timeLeft = 0;
var questionDiv = document.createElement("div");
var questionDiv1 = document.createElement("div");
var questionDiv2 = document.createElement("div");
var questionDiv3 = document.createElement("div");
var questionDiv4 = document.createElement("div");
var scoreDiv = document.createElement("div");
var lastDiv = document.createElement("div");

var result = document.createElement("div");
body.appendChild(result);
var players = [];

//Set timer
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

// Question1
    var firstQuestion = function(){
      countdown();
      startingPage.remove();
     
formQuestion.appendChild(questionDiv);
questionDiv.className = "container";
var questionOl = document.createElement("h1");
   questionDiv.appendChild(questionOl);
var answer1 = document.createElement("button");
   questionDiv.appendChild(answer1);
   answer1.className = "buttonZero";
var answer2 = document.createElement("button");
   questionDiv.appendChild(answer2);
   answer2.className = "buttonZero";
var answer3 = document.createElement("button");
   questionDiv.appendChild(answer3);
   answer3.className = "buttonZero";
var answer4 = document.createElement("button");
   questionDiv.appendChild(answer4);
   answer4.className = "buttonZero";
 
      questionOl.textContent = "Commonly used data types Do Not Include:";
      answer1.textContent = "1. strings";
      answer1.setAttribute("data-state", "wrong");
      answer1.className = "button";
     
      answer2.textContent = "2. booleans";
      answer2.setAttribute("data-state", "wrong");
      answer2.className = "button";
      
      answer3.textContent = "3. alerts";
      answer3.className = "button";
      answer3.setAttribute("data-state", "correct");
     
      answer4.textContent = "4. numbers";
      answer4.className = "button";
      answer4.setAttribute("data-state", "wrong");
    

      questionDiv.addEventListener("click", function(event){
        event.preventDefault();
        var choise = event.target;
    
        if (choise.matches(".button")){
          var state = choise.getAttribute("data-state");

          if (state === "wrong"){

            result.className = "forResult";
            result.textContent = "Wrong!";
          timeLeft -= 10;


          }else if (state === "correct"){

            result.className = "forResult1";
            result.textContent = "Correct!";

          }
        }
      });
      answer1.addEventListener("click", secondQuestion);
      answer2.addEventListener("click", secondQuestion);
      answer3.addEventListener("click", secondQuestion);
      answer4.addEventListener("click", secondQuestion);
    }

  // Question 2
  var secondQuestion = function(){

   questionDiv.remove();
formQuestion.appendChild(questionDiv1);
questionDiv1.className = "container";
var questionOl = document.createElement("h1");
   questionDiv1.appendChild(questionOl);
var answer1 = document.createElement("button");
   questionDiv1.appendChild(answer1);
   answer1.className = "buttonZero";
var answer2 = document.createElement("button");
   questionDiv1.appendChild(answer2);
   answer2.className = "buttonZero";
var answer3 = document.createElement("button");
   questionDiv1.appendChild(answer3);
   answer3.className = "buttonZero";
var answer4 = document.createElement("button");
   questionDiv1.appendChild(answer4);
   answer4.className = "buttonZero";


    questionOl.textContent = "The condition in an if/else statement is enclosed with ___.";
    answer1.textContent = "1. quotes";
      answer1.setAttribute("data-state", "wrong");
      answer1.className = "button";
     
      answer2.textContent = "2. curly brackets";
      answer2.setAttribute("data-state", "wrong");
      answer2.className = "button";
     
      answer3.textContent = "3. parenthesis";
      answer3.className = "button";
      answer3.setAttribute("data-state", "correct");
    
      answer4.textContent = "4. square brackets";
      answer4.className = "button";
      answer4.setAttribute("data-state", "wrong");
    

    questionDiv1.addEventListener("click", function(event){
      event.preventDefault();
      var choise = event.target;
  
      if (choise.matches(".button")){
        var state = choise.getAttribute("data-state");

        if (state === "wrong"){

          result.className = "forResult";
          result.textContent = "Wrong!";
        timeLeft -= 10;


        }else if (state === "correct"){

          result.className = "forResult1";
          result.textContent = "Correct!";


        }
      }
    });
    answer1.addEventListener("click", thirdQuestion);
    answer2.addEventListener("click", thirdQuestion);
    answer3.addEventListener("click", thirdQuestion);
    answer4.addEventListener("click", thirdQuestion);
   }
     
   // Question 3
   var thirdQuestion = function(){
    questionDiv1.remove();
formQuestion.appendChild(questionDiv2);
questionDiv2.className = "container";
var questionOl = document.createElement("h1");
   questionDiv2.appendChild(questionOl);
var answer1 = document.createElement("button");
   questionDiv2.appendChild(answer1);
   answer1.className = "buttonZero";
var answer2 = document.createElement("button");
   questionDiv2.appendChild(answer2);
   answer2.className = "buttonZero";
var answer3 = document.createElement("button");
   questionDiv2.appendChild(answer3);
   answer3.className = "buttonZero";
var answer4 = document.createElement("button");
   questionDiv2.appendChild(answer4);
   answer4.className = "buttonZero";


    questionOl.textContent = "Arrays in JavaScript can be used to store ____.";
    answer1.textContent = "1. numbers and strings";
      answer1.setAttribute("data-state", "wrong");
      answer1.className = "button";
     
      answer2.textContent = "2. other arrays";
      answer2.setAttribute("data-state", "wrong");
      answer2.className = "button";
     
      answer3.textContent = "3. booleans";
      answer3.className = "button";
      answer3.setAttribute("data-state", "wrong");
    
      answer4.textContent = "4. all of the above";
      answer4.className = "button";
      answer4.setAttribute("data-state", "correct");
    

    questionDiv2.addEventListener("click", function(event){
      event.preventDefault();
      var choise = event.target;
  
      if (choise.matches(".button")){
        var state = choise.getAttribute("data-state");

        if (state === "wrong"){

          result.className = "forResult";
          result.textContent = "Wrong!";
        timeLeft -= 10;


        }else if (state === "correct"){

          result.className = "forResult1";
          result.textContent = "Correct!";


        }
      }
    });
    answer1.addEventListener("click", forthQuestion);
    answer2.addEventListener("click", forthQuestion);
    answer3.addEventListener("click", forthQuestion);
    answer4.addEventListener("click", forthQuestion);
   }

   // Question 4
   var forthQuestion = function(){
    questionDiv2.remove();
formQuestion.appendChild(questionDiv3);
questionDiv3.className = "container";
var questionOl = document.createElement("h1");
   questionDiv3.appendChild(questionOl);
var answer1 = document.createElement("button");
   questionDiv3.appendChild(answer1);
   answer1.className = "buttonZero";
var answer2 = document.createElement("button");
   questionDiv3.appendChild(answer2);
   answer2.className = "buttonZero";
var answer3 = document.createElement("button");
   questionDiv3.appendChild(answer3);
   answer3.className = "buttonZero";
var answer4 = document.createElement("button");
   questionDiv3.appendChild(answer4);
   answer4.className = "buttonZero";


    questionOl.textContent = "String values must be enclosed within ____ when being assigned to variables.";
    answer1.textContent = "1. commas";
      answer1.setAttribute("data-state", "wrong");
      answer1.className = "button";
     
      answer2.textContent = "2. curly brackets";
      answer2.setAttribute("data-state", "wrong");
      answer2.className = "button";
     
      answer3.textContent = "3. quotes";
      answer3.className = "button";
      answer3.setAttribute("data-state", "correct");
    
      answer4.textContent = "4. parenthesis";
      answer4.className = "button";
      answer4.setAttribute("data-state", "wrong");
    

    questionDiv3.addEventListener("click", function(event){
      event.preventDefault();
      var choise = event.target;
  
      if (choise.matches(".button")){
        var state = choise.getAttribute("data-state");

        if (state === "wrong"){

          result.className = "forResult";
          result.textContent = "Wrong!";
        timeLeft -= 10;


        }else if (state === "correct"){

          result.className = "forResult1";
          result.textContent = "Correct!";


        }
      }
    });
    answer1.addEventListener("click", fifthQuestion);
    answer2.addEventListener("click", fifthQuestion);
    answer3.addEventListener("click", fifthQuestion);
    answer4.addEventListener("click", fifthQuestion);
   }

   // Question 5

var fifthQuestion = function(){
    questionDiv3.remove();
formQuestion.appendChild(questionDiv4);
questionDiv4.className = "container";
var questionOl = document.createElement("h1");
   questionDiv4.appendChild(questionOl);
var answer1 = document.createElement("button");
   questionDiv4.appendChild(answer1);
   answer1.className = "buttonZero";
var answer2 = document.createElement("button");
   questionDiv4.appendChild(answer2);
   answer2.className = "buttonZero";
var answer3 = document.createElement("button");
   questionDiv4.appendChild(answer3);
   answer3.className = "buttonZero";
var answer4 = document.createElement("button");
   questionDiv4.appendChild(answer4);
   answer4.className = "buttonZero";


    questionOl.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    answer1.textContent = "1. JavaScript";
      answer1.setAttribute("data-state", "wrong");
      answer1.className = "button";
     
      answer2.textContent = "2. terminal/bash";
      answer2.setAttribute("data-state", "wrong");
      answer2.className = "button";
     
      answer3.textContent = "3. for loops";
      answer3.className = "button";
      answer3.setAttribute("data-state", "wrong");
    
      answer4.textContent = "4. console.log";
      answer4.className = "button";
      answer4.setAttribute("data-state", "correct");
    

    questionDiv4.addEventListener("click", function(event){
      event.preventDefault();
      var choise = event.target;
  
      if (choise.matches(".button")){
        var state = choise.getAttribute("data-state");

        if (state === "wrong"){

          result.className = "forResult";
          result.textContent = "Wrong!";
        timeLeft -= 10;


        }else if (state === "correct"){

          result.className = "forResult1";
          result.textContent = "Correct!";


        }
      }
    });
    answer1.addEventListener("click", score);
    answer2.addEventListener("click", score);
    answer3.addEventListener("click", score);
    answer4.addEventListener("click", score);
   }

//Get score and enter initials
var score = function(){
  questionDiv4.remove();
  formQuestion.appendChild(scoreDiv);
  scoreDiv.className = "container";
  var allDone = document.createElement("h1");
  scoreDiv.appendChild(allDone);
  allDone.textContent = "All done!";
  var getScore = document.createElement("h2");
  scoreDiv.appendChild(getScore);
  var finalscore = timeLeft;
  getScore.textContent = "Your final score is " + finalscore + ".";
  var getIn = document.createElement("h2");
  scoreDiv.appendChild(getIn);
  getIn.textContent = "Enter initials";
  var Inp = document.createElement("input");
  scoreDiv.appendChild(Inp);
  Inp.className = "input";
  var submit = document.createElement("button");
  scoreDiv.appendChild(submit);
  submit.textContent = "Submit";
  submit.className = "button";
  submit.addEventListener ("click", function(players){
    const scores = JSON.parse(localStorage.getItem('players')) || [];
    const new_score = { initials: Inp.value.trim(),//get initials,
                        playerscore: finalscore,//get score
                      }
    scores.push(new_score);
    
    localStorage.setItem('players', JSON.stringify(scores));
    players = {
      initials: Inp.value.trim(),
     playerscore: finalscore,
    };
    localStorage.setItem("players", JSON.stringify(players));
  });
  submit.addEventListener ("click", viewScores);
}

// View scores
var viewScores = function() {
scoreDiv.remove();
result.remove();
formQuestion.appendChild(lastDiv);
lastDiv.className = "container";
var highScores = document.createElement("ol");
highScores.textContent = "High scores";
var loadScores = function(){
  var In = document.createElement("li");
  highScores.appendChild(In);
}
  lastDiv.appendChild(highScores);
  
  var savedScores = localStorage.getItem("players");
  savedScores = JSON.parse(savedScores);
  for (var i = 0; i < savedScores.length; i++) {
    loadScores(savedScores[i]);
  }
 
}


buttonStart.addEventListener("click", firstQuestion);
