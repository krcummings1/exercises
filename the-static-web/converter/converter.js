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

// first, I need to write out how many quarters I need based off of the input value, so for 80, 80/25 = 3.2  I would have 3 quarters equaling 75, then 80-75 = 5

// then, I need to take the remaining value (5) and determine how many dimes.... the remaining value from above is 5, so I need 0 dimes... moving on to nickels....
// then, taking the remaining value and move on to nickels and pennies.... the remaining value is 5 so I need 1 nickel 

// Now, I need to count the number for each coin 

// Then output the coins 
var coinPurse = {};

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

      if (remainder < 0.10 && remainder >= 0.05) {
    coinPurse.nickels = Math.floor(remainder / 0.05);
    remainder = (remainder - (coinPurse.nickels*0.05)).toFixed(2);
      console.log(remainder);
      console.log("nickels", coinPurse.nickels);

      if (remainder < 0.05 && remainder >= 0.01) {
    coinPurse.pennies = (remainder / 0.01);
      console.log(remainder);
      console.log("pennies", coinPurse.pennies);
    }
    }
  // else if (remainder < 0.10 && remainder >= 0.05) {
  //   coinPurse.nickels = Math.floor(remainder / 0.05);
  //   remainder = (remainder - (coinPurse.nickels*0.05));
  //     console.log(remainder);
  //     console.log("nickels", coinPurse.nickels);
  //   }
  // else if (remainder < 0.05 && remainder >= 0.01) {
  //   coinPurse.pennies = Math.floor(remainder / 0.01);
  //   remainder = (remainder - (coinPurse.pennies*0.01));
  //     console.log(remainder);
  //     console.log("pennies", coinPurse.pennies);
  }
  };

coinCounter();
console.log(coinPurse);

// console.log(button.addEventListener("click", coinCounter), coinPurse);

// var coins = coinCounter()
// console.log();








