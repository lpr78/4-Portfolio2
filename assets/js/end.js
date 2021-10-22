//Code learning reference: https://www.youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx
//Constant values used on the end page - to be used in the array store
var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var finalScore = document.getElementById("finalScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var MAX_HIGH_SCORE = 5;
//Bringing across the latest score from the game
finalScore.innerText = mostRecentScore;
//Validation - the user should enter text before saving their score result
username.addEventListener("keyup", function () {
    saveScoreBtn.disabled = !username.value;
});
saveHighScore = function (e) {
    e.preventDefault();
    var score = {
        score: mostRecentScore,
        name: username.value,
    };
    //Pushing the score into the array
    highScores.push(score);
    //Sorting the array in descending order (high first)
    highScores.sort(function (a, b) { return b.score - a.score; });
    //Keeps maximum splice to only 5 text entries to prevent clogging up the page with all results
    highScores.splice(5);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('index.html');
};
