// Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
var amountInput = document.getElementById("input");
var button = document.getElementById("button");
var result = document.getElementById("result");

button.addEventListener("click", coinCounter);
// ^ says when button is "click"ed, run coinCounter function
// this is how I'm calling this function, based off of the "click" event on the button

var coinPurse = {
  "quarters": 0,
  "dimes": 0,
  "nickels": 0,
  "pennies": 0,
};
// originally had an empty object, but set it up with keys and values to set the values to zero
// if there were no dimes, it was coming back as undefined because I didn't give it a base value

function coinCounter () {
  var remainder;
  coinPurse.quarters = Math.floor(input.value / 0.25);
  remainder = (input.value - (coinPurse.quarters*0.25)).toFixed(2);
  console.log(remainder);
  console.log("quarters", coinPurse.quarters);
  if (remainder < 0.25 && remainder >= 0.10) {
    coinPurse.dimes = Math.floor(remainder / 0.10);
    remainder = (remainder - (coinPurse.dimes*0.10)).toFixed(2);
    console.log(remainder);
    console.log("dimes", coinPurse.dimes);
    }
  if (remainder < 0.10 && remainder >= 0.05) {
    coinPurse.nickels = Math.floor(remainder / 0.05);
    remainder = (remainder - (coinPurse.nickels*0.05)).toFixed(2);
    console.log(remainder);
    console.log("nickels", coinPurse.nickels);
    }
  if (remainder < 0.05 && remainder >= 0.01) {
    coinPurse.pennies = (remainder / 0.01);
    console.log(remainder);
    console.log("pennies", coinPurse.pennies);
    }
    console.log("coinPurse object", coinPurse);
    outputToDOM();
};


function outputToDOM(){
  console.log(coinPurse);
  result.innerHTML = `<div>Quarters: ${coinPurse.quarters}</div>`
  + `<div>Dimes: ${coinPurse.dimes}</div>`
  + `<div>Nickels: ${coinPurse.nickels}</div>`
  +`<div>Pennies: ${coinPurse.pennies}</div>`;
};
// object shows up in console, but can't output just an object to the DOM, I have to set it up with the keys and values (data within)








