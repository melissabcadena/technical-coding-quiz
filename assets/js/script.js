var startQuizBtnEl = document.querySelector("#startquiz");
var questionEl = document.querySelector(".title");
var questionsContainerEl = document.querySelector(".questions-container");
var pageContentEl = document.querySelector("main");

var startQuiz = function() {
    console.log(questionsContainerEl);
    // change title to question
    questionEl.textContent = questionsArray[0].question;

    // remove start quiz button and quiz instructions
    questionsContainerEl.removeChild(startQuizBtnEl);
    questionsContainerEl.removeChild(document.querySelector("p"));

    pageContentEl.className = "question-content";

    // add all four buttons
    questionsContainerEl.innerHTML = "<button class='btn question-btn'>" + questionsArray[0].answerOne + "</button><button class=' btn question-btn'>" + questionsArray[0].answerTwo + "</ button><button class='btn question-btn'>" + questionsArray[0].answerThree + "</button><button class='btn question-btn'>" + questionsArray[4].answerFour + "</button>";
};

var questionsArray = [
    {
        question: "Commonly used data types DO NOT include:",
        answerOne: "1. strings",
        answerTwo: "2. boolean",
        answerThree: "3. alerts",
        answerFour: "4. numbers",
    } , 
    {
        question: "The condition in an if/else statement is enclosed with ____________.",
        answerOne: "1. quotes",
        answerTwo: "2. curly brackets",
        answerThree: "3. parentheses",
        answerFour: "4. square brackets"
    } , 
    {
        question: "Arrays in Javascript can be used to store: ",
        answerOne: "1. number and strings",
        answerTwo: "2. other arrays", 
        answerThree: "3. booleans",
        answerFour: "4. all of the above"
    } , 
    {
        question: "String values must be enclosed within __________ when being assigned to variables.",
        answerOne: "1. commas",
        answerTwo: "2. curly brackets", 
        answerThree: "3. quotes",
        answerFour: "4. parentheses"
    } , 
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answerOne: "1. Javascript",
        answerTwo: "2. Terminal Bash",
        answerThree: "3. for loops",
        answerFour: "4. console.log"
    }
];

startQuizBtnEl.addEventListener("click", startQuiz);