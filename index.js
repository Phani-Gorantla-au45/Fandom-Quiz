Questions = [
  {
    question : "How many airlines does the Tata Group own? ",
    answer : '3'
  },
  {
    question : "OLA bought which financial services company? ",
    answer : 'Avail finance'
  },
  {
    question : "Which mutual fund house's name has been changed to White Oak Capital? ",
    answer : 'Yes MF'
  },
  {
    question : "Why have gold prices gone up in the last few days? ",
    answer : 'inflation'
  },
]

highScores = [
  {
    name: "Phani",
    score : 4
  },
   {
    name: "Shrilu",
    score : 3
  }
]

var readlinesync = require('readline-sync');
var userName = readlinesync.question("Whats your Name? ");
console.log("Hi "+userName +"," + "welcome to Quiz");

score = 0;

function playQuiz(questions){
  for (q in questions){
    userAnswer = readlinesync.question(questions[q].question);
    if(userAnswer.toUpperCase() === questions[q].answer.toUpperCase()){
      console.log("Yes, You were correct");
      score = score + 1;
    }
    else{
      console.log("Wrong anser");
    }
  }
  console.log("Your total score is: ", score);
}
function showHighScore(hs){
  // console.log("inside")
  console.log("Here's the details of high scorers in this quiz")
  for (let i in hs){
    console.log("Name: ", hs[i].name)
    console.log("Score: ", hs[i].score)
  }
  console.log("If you've beaten this score, send me a screenshot, I will update your details")
}

playQuiz(Questions);
// console.log("outside")
showHighScore(highScores);