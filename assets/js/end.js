//Code learning reference: https://www.youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx

//Constant values used on the end page - to be used in the array store
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORE = 5;

//Bringing across the latest score from the game
finalScore.innerText = mostRecentScore;

//Validation - the user should enter text before saving their score result
username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  //Pushing the score into the array
  highScores.push(score);
  //Sorting the array in descending order (high first)
  highScores.sort((a, b) => b.score - a.score);
  //Keeps maximum splice to only 5 text entries to prevent clogging up the page with all results
  highScores.splice(5); 
  localStorage.setItem('highScores',JSON.stringify(highScores));
  window.location.assign('index.html');

};
