// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var F = 0;
var D = 0;
var C = 0;
var B = 0;
var A = 0;

// Use console.log to output the following criteria:

// How many of each grade?
function checkScores(scores) {
  for (var i=0; i <= scores.length; i++){
// i=0 is starting counter off at 0
// i <= scores says 0 <= numbers in scores array
// scores.LENGTH because we have to look at entire length of array, aka it's how we look at all of the numbers within the scores array
//  i++ to keep looping over them all
    if (scores[i] >= 50 && scores[i] <= 60) {
        F++;
// scores[i] is making it go through all of the scores
// F++ is adding 1 to counter
    // ++ adds 1, and because above we put var F = 0, the F++ is adding to that counter
  } if (scores[i] >= 61 && scores[i] <= 70) {
        D++;
  } if (scores[i] >= 71 && scores[i] <= 80) {
        C++;
  } if (scores[i] >= 81 && scores[i] <= 90) {
        B++;
  } if (scores[i] >= 91 && scores[i] <= 100) {
        A++;
  }
 }
console.log("how many Fs", F);
console.log("how many Ds", D);
console.log("how many Cs", C);
console.log("how many Bs", B);
console.log("how many As", A);


}
checkScores(scores);
// ^ makes the function checkScores(scores) run

// What is the lowest grade?
var lowestGrade = Math.min(...scores);
console.log("lowest grade", lowestGrade);


// What is the highest grade?
var highestGrade = Math.max(...scores);
console.log("highest grade", highestGrade);


// RESOURCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

// Or with the new spread operator, getting the maximum of an array becomes a lot easier.

// var arr = [1, 2, 3];
// var max = Math.max(...arr);












