var startQuizBtnEl = document.querySelector("#startquiz");
var titleEl = document.querySelector(".title");
var startPageEl = document.querySelector(".start-page");
var questionPageEl = document.querySelector(".question-page");
var endPageEl = document.querySelector(".end-page");
var pageContentEl = document.querySelector("main");
var buttonContainerEl = document.querySelector(".button-container");


var startQuiz = function() {
    debugger;
    // hide start page
    pageContentEl.removeChild(startPageEl);

    // loop through questions 
   for (i = 0; i < questionsArray.length; i++) {
        
        // add question to page
        var question = document.createElement("h1");
        question.className = "question";
        question.textContent = questionsArray[i].q;
        questionPageEl.insertBefore(question, buttonContainerEl);

        // add all four buttons
        buttonContainerEl.innerHTML = "<button class='btn question-btn'>" + questionsArray[i].a1 + "</button><button class=' btn question-btn'>" + questionsArray[i].a2 + "</ button><button class='btn question-btn'>" + questionsArray[i].a3 + "</button><button class='btn question-btn'>" + questionsArray[i].a4 + "</button>";

        // how do I wait for question to be answered to move on to the next question???

        };
};

var questionAnswered = function (event) {
    var answer = event.target;
     
    if (answer.textContent === questionsArray[0].correct) {
        var correctAnswer = document.createElement("p");
        correctAnswer.className = "correct";
        correctAnswer.textContent= "Correct!";
        questionPageEl.appendChild(correctAnswer);
    }
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