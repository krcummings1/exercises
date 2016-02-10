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

// first, I need to write out how many quarters I need based off of the input value, so for 80, I would have 3 quarters equaling 75, 80-75=5

// then, I need to take the remaining value and determine how many dimes.... the remaining value from above is 5, so I need 0 dimes... moving on to nickels....
// then, taking the remaining value and move on to nickels and pennies.... the remaining value is 5 so I need 1 nickel 

// Now, I need to count the number for each coin 

// Then output the coins 
  var coinPurse = {};

function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var numberOfQuarters = (input.value / 25);
    coinPurse.quarters = Math.floor(numberOfQuarters);
  var remainder = (input.value - (coinPurse.quarters*25)); 
      if (remainder > 25 && <=10) {
        
      }
    // input.value - remainder
    // do if statements... if <10, move on to dimes




    // digits before decimal * 25 = wholeNumber, then input.value - wholeNumber
  // digits before decimal * 25 = a number... then, input.value - that number = numberOfQuarters
  console.log(coinPurse);
  console.log(remainder);

  // figure out how to take decimals and 

// if numberOfQuarters is > 0.... continue

  // (input.value - numberOfQuarters);



  return coinPurse;
}

var coins = coinCounter()
console.log();








