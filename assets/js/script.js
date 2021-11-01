//GAME PAGE JS SCRIPT
//Reference for learning and walkthrough production: https://www.youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx
//variable and constant values for the game element
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');

var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var questionCounter = 0;
var availableQuesions = []; //initial blank array
var questions = []; //initial blank array
var startGame;
var getNewQuestion;
var closebutton;
var incrementScore;

//Adding year in the footer
document.getElementById("date").innerHTML = (new Date().getFullYear());

//retrieving questions - credit to James Q on README file
fetch("assets/js/questions.json")
    .then(function (res) {
        return res.json();
    })
    .then(function (loadedQuestions) {
        questions = loadedQuestions;
        startGame();
    })
    .catch(function (err) {
        console.error(err);
    });
//CONSTANTS
const CORRECT_BONUS = 2; //Setting value to 2 - 1 for answer and 1 for workings
const MAX_QUESTIONS = 20; //max questions from JSON file - can be changed and extended
//setting up links to the questions within the json file and ensuring does not go over the question amount (using a count controlled loop)
const __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//Start of the game retrieving elements and setting values
startGame = function () {
    questionCounter = 0;
    score = 0;
    availableQuesions = __spreadArrays(questions);
    getNewQuestion();
};
//Setting up the 2 minute timer
window.onload = function () {
    var twoMins = 60 * 2,
        display = document.querySelector('#timeLeft');
    startTimer(twoMins, display);
};

//Adding a close function to the cross icon on the game to exit
closebutton = function () {
    alert("EXITING QUIZ! \n* Remember Revision is the key to success\n* Please revise next time\n* Try to complete the Binary Quiz next time!");
    localStorage.setItem('mostRecentScore', score);
    //go to the end page
    return window.location.assign('end.html');
};

//Running the two minute timer
function startTimer(duration, display) { //Bringing in the twoMin and display as a parameter/argument
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            alert('You should have completed the question by now\nSee if you are quicker next time!')
            timer = duration;
        }
    }, 1000);
}
//Checking if questions answered or getting next item from array
getNewQuestion = function () {
    //add close button to this section
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign('end.html');
    }
    questionCounter++;
    progressText.innerText = "Question " + questionCounter + "/" + MAX_QUESTIONS;
    //Update the progress bar
    progressBarFull.style.width = (questionCounter / MAX_QUESTIONS) * 100 + "%";
    //updates question and relevant JSON choices linked to question
    var questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;
    choices.forEach(function (choice) {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};
//Updating question choices
choices.forEach(function (choice) {
    choice.addEventListener('click', function (e) {
        if (!acceptingAnswers)
            return;
        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset['number'];
        var classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }
        selectedChoice.parentElement.classList.add(classToApply);
        //applying delay before next question - so red/green outcome clear
        setTimeout(function () {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});
incrementScore = function (num) {
    score += num;
    scoreText.innerText = score;
};
//HIGH SCORE HTML PAGE JS CODE
var highScoresList = document.getElementById('highScoresList');
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
highScoresList.innerHTML = highScores.map(function (score) {
    return "<li class = \"high-score\">" + score.name + ":&emsp;" + score.score + "</li>";
}).join("");