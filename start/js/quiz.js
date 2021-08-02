let correctAnswers = 0;
let qOne = 4;
let qTwo = 6;
let qThree = 8;
let qFour = 10;
let qFive = 20;

// 2. Store the rank of a player


let playerRank = '';

// 3. Select the <main> HTML element

let mainHTML = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

const answerOne = prompt("What is 2+2?");
if ( answerOne == qOne ) {
  correctAnswers += 1;
} 
const answerTwo = prompt("What is 3+3?");
if ( answerTwo == qTwo ) {
  correctAnswers += 1;
} 
const answerThree = prompt("What is 4+4?");
if ( answerThree == qThree ) {
  correctAnswers += 1;
} 
const answerFour = prompt("What is 5+5?");
if ( answerFour == qFour ) {
  correctAnswers += 1;
} 
const answerFive = prompt("What is 10+10?");
if ( answerFive == qFive ) {
  correctAnswers += 1;
} 


// What is 2+2? What is 3+3? What is 4+4? What is 5+5? What is 10+10?


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if ( correctAnswers === 5 ) {
  playerRank = 'Gold';
} else if ( correctAnswers === 3 || correctAnswers === 4 ) {
  playerRank = 'Silver';
} else if ( correctAnswers === 1 || correctAnswers === 2 ) {
  playerRank = 'Bronze';
} else {
  playerRank = 'No crown';
}

let crownEarned = correctAnswers == 0 ? 'No crown earned' : `Crown Earned: ${playerRank}`;

// 6. Output results to the <main> element
let scoreDisplay = `<h1>You got ${correctAnswers} out of 5 questions correct.</h1><br/><p>${crownEarned}</p>`

mainHTML.innerHTML = scoreDisplay;

