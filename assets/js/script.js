// DOM Elements
var startQuizBtnEl = document.querySelector("#startquiz");
var titleEl = document.querySelector(".title");
var startPageEl = document.querySelector(".start-page");
var questionPageEl = document.querySelector(".question-page");
var endPageEl = document.querySelector(".end-page");
var pageContentEl = document.querySelector("main");
var buttonContainerEl = document.querySelector(".button-container");
var timerEl = document.querySelector(".timer");
var highScorePageEl = document.querySelector(".high-score-page");

// Timer Variables
var timeLeft= 75;
var count = 0;
var timer="";

// Elements to add to the page at a later time
var question = document.createElement("h1");
question.className = "question";
var rightOrWrong = document.createElement("p");
rightOrWrong.className = "answer";
var initialSubmitBtnEl = document.createElement("button");
var inputInitialsContainerEl = document.createElement("div");
initialSubmitBtnEl.className="btn";
initialSubmitBtnEl.textContent = "Submit";
var highScoreButtonsEl = document.createElement("div");
highScoreButtonsEl.className = "high-score-buttons";

// start quiz on button click
var startQuiz = function() {
    //debugger;
    // hide start page
    pageContentEl.removeChild(startPageEl);

    timer = setInterval(function() {
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft--;
    
        if (timeLeft === 0) {
            clearInterval(timer);
            timerEl.textContent = "Time: 0";
            endGame();
            
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

       
    questionPageEl.appendChild(rightOrWrong);      
    
};

var questionAnswered = function (event) {

    // if click is anywhere undefined, return early
    var answer = event.target;
    if (!event.target.type) {
        return
    }
    
    // if the user answer matches correct answer
    if (answer.textContent === questionsArray[count].correct) {
        rightOrWrong.textContent= "Correct!";
        console.log(answer);
        
    }
    else {
        rightOrWrong.textContent= "Incorrect!";
        timeLeft-=10;
        console.log(answer);
        
    }
    // increase count
    count++;

    // if we have gone through all the questions, stop timer and end game
    if (count === questionsArray.length) {
        clearInterval(timer);
        endGame();
    }
    question.textContent = questionsArray[count].q;
    buttonContainerEl.innerHTML = "<button class='btn question-btn'>" + questionsArray[count].a1
     + "</button><button class=' btn question-btn'>" + questionsArray[count].a2
      + "</ button><button class='btn question-btn'>" + questionsArray[count].a3
       + "</button><button class='btn question-btn'>" + questionsArray[count].a4 + "</button>";
}

var endGame = function () {
    // // remove content from question page
        pageContentEl.removeChild(questionPageEl)


    // create elements for end game page
     //title
     var endPageTitleEl = document.createElement("h1");
     endPageTitleEl.className = "title";
     endPageTitleEl.textContent = "All done!";

    //p
    var finalScoreEl = document.createElement("p");
    finalScoreEl.textContent = "Your final score is " + timeLeft + ".";

    // Input Initials
    inputInitialsContainerEl.innerHTML = "<label for='initials'>Enter intials: </label><input type='text' name='initials' minlength='2' maxlength'2'>";

    // add all elements to page
    endPageEl.appendChild(endPageTitleEl);
    endPageEl.appendChild(finalScoreEl);
    endPageEl.appendChild(inputInitialsContainerEl);
    endPageEl.appendChild(initialSubmitBtnEl);
};

var highScoreSubmit = function() {

    // save initials input to variable
    var initialsInput = document.querySelector("input").value;

    // if no initials entered, try again
    if (!initialsInput || initialsInput.length < 2) {
        alert("Please enter your initials.");
        return;
    }
    
    // save high score to object
    var highScoreObj = {
        name: initialsInput,
        score: timeLeft
    };
    debugger;
    // pull any already existing high scores from localStorage
    var dataFromLocal = [JSON.parse(localStorage.getItem("highScores"))];

    // if nothing start empty array
    if (!dataFromLocal) {
        dataFromLocal = [];
    }

    //save previous high scores to array
    console.log(dataFromLocal);
    dataFromLocal.push(highScoreObj);

    // save new high score array to local storage
    localStorage.setItem("highScores", JSON.stringify(dataFromLocal))

    // remove content from end page
    pageContentEl.removeChild(endPageEl);

    // create elements for high score page
    //title
    var highScoreTitleEl = document.createElement("h1");
    highScoreTitleEl.className = "title";
    highScoreTitleEl.textContent = "High Scores";

    //list of high scores
    var highScoreListEl = document.createElement("ul");
    highScoreListEl.className = "high-scores";

    // add in high scores from localStorage
    
    // go back button
    var goBackButtonEl = document.createElement("button");
    goBackButtonEl.className = "btn";
    goBackButtonEl.textContent = "Go back";


    // clear high scores button
    var clearHighScoresBtnEl = document.createElement("button");
    clearHighScoresBtnEl.className= "btn";
    clearHighScoresBtnEl.textContent = "Clear High Scores";
    
    // append all children elements to page and div container
    highScorePageEl.appendChild(highScoreTitleEl);
    highScorePageEl.appendChild(highScoreListEl);  
    highScoreButtonsEl.appendChild(clearHighScoresBtnEl);
    highScoreButtonsEl.appendChild(goBackButtonEl);
    highScorePageEl.appendChild(highScoreButtonsEl);

};

var buttonsFunction = function (event) {
    var buttonClicked = event.target;
    
    if (buttonClicked.textContent = "Go Back") {
        pageContentEl.removeChild(highScorePageEl);
        pageContentEl.appendChild(endPageEl);
    }
    else {
        //localStorage.removeItem();
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
        correct: "3. parentheses"
    } , 
    {
        q: "Arrays in Javascript can be used to store: ",
        a1: "1. number and strings",
        a2: "2. other arrays", 
        a3: "3. booleans",
        a4: "4. all of the above",
        correct: "4. all of the above"
    } , 
    {
        q: "String values must be enclosed within __________ when being assigned to variables.",
        a1: "1. commas",
        a2: "2. curly brackets", 
        a3: "3. quotes",
        a4: "4. parentheses",
        correct: "3. quotes"
    } , 
    {
        q: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        a1: "1. Javascript",
        a2: "2. Terminal Bash",
        a3: "3. for loops",
        a4: "4. console.log",
        correct: "4. console.log"
    }
];

startQuizBtnEl.addEventListener("click", startQuiz);
buttonContainerEl.addEventListener("click", questionAnswered);
initialSubmitBtnEl.addEventListener("click", highScoreSubmit);
highScoreButtonsEl.addEventListener("click", buttonsFunction);