var startQuizBtnEl = document.querySelector("#startquiz");
var titleEl = document.querySelector(".title");
var startPageEl = document.querySelector(".start-page");
var questionPageEl = document.querySelector(".question-page");
var endPageEl = document.querySelector(".end-page");
var pageContentEl = document.querySelector("main");
var buttonContainerEl = document.querySelector(".button-container");
var timerEl = document.querySelector(".timer");
var timeLeft= 75;
var count = 0;
var rightOrWrong = document.createElement("p");
rightOrWrong.className = "answer";
var question = document.createElement("h1");
question.className = "question";




var startQuiz = function() {
    //debugger;
    // hide start page
    pageContentEl.removeChild(startPageEl);

    var timer = setInterval(function() {
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft--;
    
        if (timeLeft === 0) {
            // endGame() - need to define
            console.log("timer is done");
            clearInterval(timer);
        }
    }, 1000);
        
    // add question to page
    question.textContent = questionsArray[count].q;
    questionPageEl.insertBefore(question, buttonContainerEl);

    // add all four buttons
    buttonContainerEl.innerHTML = "<button class='btn question-btn'>" + questionsArray[count].a1
     + "</button><button class=' btn question-btn'>" + questionsArray[count].a2
      + "</ button><button class='btn question-btn'>" + questionsArray[count].a3
       + "</button><button class='btn question-btn'>" + questionsArray[count].a4 + "</button>";

       
       questionPageEl.appendChild(rightOrWrong)       
    
};

var questionAnswered = function (event) {
    var answer = event.target;
    if (!event.target.type) {
        return
    }
    
     
    if (answer.textContent === questionsArray[count].correct) {
        rightOrWrong.textContent= "Correct!";
        
    }
    else {
        rightOrWrong.textContent= "Incorrect!";
        
    }
    count++;
    if (count === questionsArray.length-1) {
        endGame();
    }
    question.textContent = questionsArray[count].q;
    buttonContainerEl.innerHTML = "<button class='btn question-btn'>" + questionsArray[count].a1
     + "</button><button class=' btn question-btn'>" + questionsArray[count].a2
      + "</ button><button class='btn question-btn'>" + questionsArray[count].a3
       + "</button><button class='btn question-btn'>" + questionsArray[count].a4 + "</button>";
}

var questionsArray = [
    {
        q: "Commonly used data types DO NOT include:",
        a1: "1. strings",
        a2: "2. boolean",
        a3: "3. alerts",
        a4: "4. numbers",
        correct: "3. alerts"
    } , 
    {
        q: "The condition in an if/else statement is enclosed with ____________.",
        a1: "1. quotes",
        a2: "2. curly brackets",
        a3: "3. parentheses",
        a4: "4. square brackets", 
        correct: "a3"
    } , 
    {
        q: "Arrays in Javascript can be used to store: ",
        a1: "1. number and strings",
        a2: "2. other arrays", 
        a3: "3. booleans",
        a4: "4. all of the above",
        correct: "a3"
    } , 
    {
        q: "String values must be enclosed within __________ when being assigned to variables.",
        a1: "1. commas",
        a2: "2. curly brackets", 
        a3: "3. quotes",
        a4: "4. parentheses",
        correct: "a3"
    } , 
    {
        q: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        a1: "1. Javascript",
        a2: "2. Terminal Bash",
        a3: "3. for loops",
        a4: "4. console.log",
        correct: "a4"
    }
];

startQuizBtnEl.addEventListener("click", startQuiz);
questionPageEl.addEventListener("click", questionAnswered);